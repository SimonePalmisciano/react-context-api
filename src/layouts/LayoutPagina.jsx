import { Outlet, Link, NavLink } from "react-router"
import { Form, FormCheck } from "react-bootstrap"
import { useContext } from "react"
import { BudgetContext } from '../contexts/BudgetContext'

function LayoutPagina() {
    const { changeBudgetMode, budgetMode, setBudgetMode } = useContext(BudgetContext);

    const initialValue = undefined;

    const handleChange = (event) => {
        const value = event.target.value;
        setBudgetMode(value);
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container">
                        <span className="navbar-brand fw-bold">React Router</span>
                        {/*budgetMode === true ?
                            <>
                                <Form.Check onClick={changeBudgetMode}
                                    type="switch"
                                    id="custom-switch-ON"
                                />
                                <label className="text-white" htmlFor="custom-switch-ON">BudgetMode ON</label>
                            </>
                            :
                            <>
                                <Form.Check onClick={changeBudgetMode}
                                    type="switch"
                                    id="custom-switch-OFF"
                                />
                                <label className="text-white" htmlFor="custom-switch-OFF">BudgetMode OFF</label>
                            </>
                        */}
                        <ul className="navbar-nav ms-auto gap-2">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home Page
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/chi-siamo" className="nav-link">
                                    Chi Siamo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/prodotti" className="nav-link">
                                    Prodotti
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="div-filter d-flex flex-column bg-black justify-content-center align-items-center">
                    <label
                        className="text-white"
                        htmlFor="filterPrice">
                        Filtra per prezzo
                    </label>
                    <input
                        type="number"
                        id="filterPrice"
                        className="form-control"
                        name="price"
                        min={1}
                        max={9999}
                        value={initialValue}
                        onChange={handleChange}
                    />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-black text-white text-center p-3">
                <p>&copy; 2026 Simone Palmisciano S.P.A</p>
            </footer>
        </>
    )
}
export default LayoutPagina