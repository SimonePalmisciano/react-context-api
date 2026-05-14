import { createContext, useState } from "react";

const BudgetContext = createContext(null)

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);

    const changeBudgetMode = () => {
        console.log("ciao")
        !budgetMode ? setBudgetMode(true) : setBudgetMode(false);
    };

    const valueToSend = {
        budgetMode,
        changeBudgetMode
    };

    return (
        <BudgetContext value={valueToSend}>
            {children}
        </BudgetContext>
    );
}
export {
    BudgetContext,
    BudgetProvider,
}