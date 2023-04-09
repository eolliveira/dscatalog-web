import { Route, Switch } from 'react-router-dom';
import { List } from './List';
import { Form } from './Form';

export function Products() {
  return (
    <Switch>
      <Route path={'/admin/products'} exact>
       <List />
      </Route>
      <Route path={'/admin/products/:productId'}>
        <Form />
      </Route>
    </Switch>
  );
}
