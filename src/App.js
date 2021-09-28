import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import "alertifyjs/build/css/alertify.css";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={ProductGrid} />
                <Route exact path="/cart" component={Cart} />
                <Route component={ProductGrid} />
            </Switch>
        </Router>
    )
}

export default App
