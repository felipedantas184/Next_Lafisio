import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <main className="not-found">
      <h1>Erro 404</h1>
      <h2>Oops! A página não foi encontrada:(</h2>
      <p>Redirecionando para <Link href="/"><a className="BackLink">Homepage</a></Link> em alguns segundos ;)...</p>

      <style jsx>{`
        .not-found {
          color: #fff;
          background: rgb(2,0,36);
          background: linear-gradient(to left top, rgba(9,90,160,1) 33%, rgba(18, 163, 186,1) 100%);
          margin-top: -80px;
          padding: 320px 40px 160px 40px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 32px;
        }
        h2 {
          font-size: 2em;
          margin-bottom: 16px;
        }
        .BackLink {
          color: #D4D4D4
        }
      `}</style>
    </main>
  );
}
 
export default NotFound;