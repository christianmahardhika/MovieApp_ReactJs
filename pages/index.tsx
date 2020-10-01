import 'semantic-ui-css/semantic.min.css'
// // pages/index.tsx

// /*
//  * Will display "Hello World!" unless we specify a name in the url
//  * http://localhost:3000?name=Margot will display "Hello Margot!"
//  */ 
// const Home = ({ name }) => (
//   <div>
//     <p>Hello {name}!</p>
//     <p>I m from mars</p>
//   </div>
// )
// export default Home

// /*
//  * More information about getServerSideProps:
//  * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
//  */
// export const getServerSideProps = async ({ query }) => {
//   return {
//     props: {
//       name: query.name || 'World',
//     }
//   }
// }

// // import useState next to FunctionComponent
// import React, { FunctionComponent, useState } from 'react';

// // our components props accept a number for the initial value
// const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
//   // since we pass a number here, clicks is going to be a number.
//   // setClicks is a function that accepts either a number or a function returning
//   // a number
//   const [clicks, setClicks] = useState(initial);
//   return <>
//     <p>Clicks: {clicks}</p>
//     <button onClick={() => setClicks(clicks+1)}>+</button>
//     <button onClick={() => setClicks(clicks-1)}>-</button>
//   </>
// }

// export default Counter

import Link from 'next/link'
const Home = () => (
  <div>
     <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/dashboard">
          <a>dashboard</a>
        </Link>
      </li>
    </ul>
    <h1>This is home</h1>
  </div>
 
)
export default Home