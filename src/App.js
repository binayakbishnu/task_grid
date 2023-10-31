// react imports
import React from "react";
import GridLayout from "./GridLayout";

// styles and media
import { ChakraProvider } from '@chakra-ui/react'
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