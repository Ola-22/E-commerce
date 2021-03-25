import Cart from "../Cart";
import { Route } from "react-router-dom";

export function Section() {
  return (
    <section>
      <Route path="/cart" component={Cart} exact />
    </section>
  );
}
