import { BudgetContext } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudgetMode() {
    const budgetContext = useContext(BudgetContext);

    if (budgetContext === null) {
        console.log("c'è qualcosa che non va");
        
    }

    return budgetContext;
}

export default useBudgetMode;