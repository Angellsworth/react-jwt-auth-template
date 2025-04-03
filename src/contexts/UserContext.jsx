import { createContext } from "react";// Step 1: Bring in React's built-in tool to create a context

        // Step 2: Create a new context object – think of it like a locker or a shared container
const UserContext = createContext(); 

        // Step 3: Create a wrapper component that will provide the context to other components
function UserProvider({ children }) {
        // `children` represents whatever components we wrap inside <UserProvider> in our app

    return (
        // Step 4: The Provider gives access to the context value (we'll add a value soon)
        <UserContext.Provider>
            {children} {/* Step 5: All wrapped components get access to the context */}
        </UserContext.Provider>    
    )
}

        // Step 6: Export the provider so we can use it in other parts of the app
export { UserProvider }