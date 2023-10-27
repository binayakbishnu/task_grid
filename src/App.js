// react imports
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import GridLayout from "./GridLayout";

// styles and media
import './App.css'

// misc

const App = () => {
    return (
        <ChakraProvider>
            <GridLayout />
        </ChakraProvider>
    )
}

export default App;