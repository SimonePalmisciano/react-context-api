import { createContext, useState } from "react";

const BudgetContext = createContext(null)

function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(null);

    // const changeBudgetMode = () => {
    //     !budgetMode ? setBudgetMode(true) : setBudgetMode(false);
    // };

    const valueToSend = {
        budgetMode,
        setBudgetMode,
        // changeBudgetMode,
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