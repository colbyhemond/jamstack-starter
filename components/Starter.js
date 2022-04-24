import { useEffect } from 'react'


export const checkRequiredEnvs = () => {
    const envs = []

    if (!process.env.NEXT_PUBLIC_CLERK_FRONTEND_API) {
        envs.push('NEXT_PUBLIC_CLERK_FRONTEND_API')
    }
    
    if (!process.env.CLERK_API_KEY) {
        envs.push('CLERK_API_KEY')
    }
    
    if (!process.env.CLERK_JWT_KEY) {
        envs.push('CLERK_JWT_KEY')
    }

    if (!process.env.MONGODB_URI) {
        envs.push('MONGODB_URI')
    }
    
    if (!process.env.MONGODB_DB) {
        envs.push('MONGODB_DB')
    }

    return envs

}



const Starter = () => {
    
    return (<>
        <div className='flex justify-center p-10'>
            <h1 className='center'>JAMstack Starter</h1>
        </div>
    </>)
}

export default Starter