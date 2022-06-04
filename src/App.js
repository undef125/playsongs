import "./App.css";
import SPlay from "./components/SPlay";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <SPlay />
            </ChakraProvider>
        </div>
    );
}

export default App;
