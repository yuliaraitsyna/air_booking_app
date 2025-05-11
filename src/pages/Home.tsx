import { Typography } from "@mui/material";
import './index.css'

export default function Home() {
  return (
    <>
        <div className="page">
          <Typography variant="h3">Welcome to Air Service</Typography>
          <Typography variant="body1">This application is connected to Air Service microservice application</Typography>  
        </div>
    </>
  )
}

