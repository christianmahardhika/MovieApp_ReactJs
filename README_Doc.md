# Frontend Code and Architecture Docs

Using NEXT.JS for frontend website base on react library

We are using Typescript for handling data from backend more Typescript docs -> <https://www.typescriptlang.org/docs/>

## Route

Next.js has a file-system based router
docs -> <https://nextjs.org/docs/routing/introduction>

Just put *index.tsx* inside the folder route path on *pages* folder like this one
example:

```typescript
pages/index.js → /
pages/dashboard/index.js → /dashboard
```

code example:

```typescript
import Link from 'next/link'

function Home() {
  return (
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
  )
}

export default Home
```

## React Component

We separate each element of website into a component such as *Button, Text Field, Form, Image, Card, etc*

Component will place inside *component* folder

example on components folder:

```typescript
const Button = () => {
    return <button>Click me</button>
  }

export default Button
```

example call / import the component:

```typescript
import Button from "../../components/button";
const Dashboard = () => (
  <div>
    <h1>I am from Mars</h1>
    <Button />
  </div>
)
export default Dashboard
```

## UI Framework

We are using *React Sematic Ui* docs -> <https://react.semantic-ui.com/>

// TODO Grid, Layout, Responsive Docs

## State Management

### Local State Management

useState
docs -> <https://reactjs.org/docs/hooks-intro.html>

code example:

```typescript
/ import useState next to FunctionComponent
import React, { FunctionComponent, useState } from 'react';

// our components props accept a number for the initial value
const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [clicks, setClicks] = useState(initial);
  return <>
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
  </>
}

export default Counter
```

### Global state management

// TODO (Research about Redux)

## Code Style and Conventions

// Todo

### Code Organization

// Todo

### Code Naming Convention

// Todo
