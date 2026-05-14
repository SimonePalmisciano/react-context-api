import { createContext, useState } from "react";

const BudgetContext = createContext(null)

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    const changeBudgetMode = () => {
        !budgetMode ? setBudgetMode(true) : setBudgetMode(false);
    }

    const value = {
        budgetMode,
        setBudgetMode,
        changeBudgetMode
    }

    return (
        <BudgetProvider value={value}>
            {children}
        </BudgetProvider>
    )
}
export { BudgetProvider, BudgetContext }