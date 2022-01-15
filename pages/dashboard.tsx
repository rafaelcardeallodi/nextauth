import { destroyCookie } from "nookies"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { setupAPIClient } from "../services/api"
import { AuthTokenError } from "../services/errors/AuthTokenError"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard(){
  const { user } = useContext(AuthContext)

  return(
    <h1>Dashboard: {user?.email}</h1>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');
  
  return{
    props: {}
  }
})