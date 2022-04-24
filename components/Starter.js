
const Starter = () => {
    
    return (<>
        <div className='flex flex-col items-center p-10'>
            <h1 className='center text-[36pt] font-extrabold'>JAMstack Starter</h1>
            <div className='flex justify-between'>
                <div className='font-extrabold mx-3 text-blue-400'><a href='https://nextjs.org/docs/getting-started'>Next.js</a></div>
                <div className='font-extrabold mx-3 text-blue-400'><a href='https://tailwindcss.com/docs/utility-first'>Tailwind UI</a></div>
                <div className='font-extrabold mx-3 text-blue-400'><a href='https://www.mongodb.com/docs/manual/crud/'>MongoDB</a></div>
                <div className='font-extrabold mx-3 text-blue-400'><a href='https://clerk.dev/docs/get-started/nextjs'>Clerk Auth</a></div>
            </div>
            <h2 className='text-[24pt] mt-10 mb-5'>Step 1: Get your copy of the starter</h2>
            <a href='https://app.netlify.com/start/deploy?repository=https://github.com/colbyhemond/jamstack-starter'>
                <img src='https://www.netlify.com/img/deploy/button.svg'/>
            </a>
            <h2 className='text-[24pt] mt-10 mb-5'>Step 2: Set up <code>.env.local</code></h2>
            <div className="mockup-code">
                <pre><code># .env.local</code></pre> 
                <pre><code></code></pre> 
                <pre><code># Clerk Authorization</code></pre> 
                <pre><code>NEXT_PUBLIC_CLERK_FRONTEND_API=</code></pre> 
                <pre><code>CLERK_API_KEY=</code></pre>
                <pre><code>CLERK_JWT_KEY=</code></pre>
                <pre><code></code></pre> 
                <pre><code># MongoDB Database</code></pre> 
                <pre><code>MONGODB_URI=</code></pre>
                <pre><code>MONGODB_DB=</code></pre>
            </div>
            <div className='mt-20'>
                <div>
                    <a href='https://github.com/colbyhemond/jamstack-starter'>
                        <img src='/gh-light.png'/>
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default Starter