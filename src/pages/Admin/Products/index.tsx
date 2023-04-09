import { Route, Switch } from 'react-router-dom';
import { List } from './List';

export function Products() {
  return (
    <Switch>
      <Route path={'/admin/products'} exact>
       <List />
      </Route>
      <Route path={'/admin/products/:productId'}>
        <h1>Form</h1>
      </Route>
    </Switch>
  );
}
