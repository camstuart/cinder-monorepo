import {useState} from 'react'
import {Button, Heading, Text} from "@radix-ui/themes";
import Layout from "./layout.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (

            <Layout>
            <div>
                <a href="/">
                    <img src='/cinder-logo.svg' width={'200px'} alt="Cinder logo"/>
                </a>
            </div>
            <Heading>Cinder - Fire Awareness</Heading>
            <div>
                <Button variant="solid" onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </Button>
            </div>
            <Text>build the fucking app already!</Text>
            </Layout>
    )
}

export default App
