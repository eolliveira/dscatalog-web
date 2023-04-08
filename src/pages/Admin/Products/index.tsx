import { Route, Switch } from 'react-router-dom';

export function Products() {
  return (
    <Switch>
      <Route path={'/admin/products'} exact>
        <h1>List</h1>
      </Route>
      <Route path={'/admin/products/:productId'}>
        <h1>Form</h1>
      </Route>
    </Switch>
  )
}
