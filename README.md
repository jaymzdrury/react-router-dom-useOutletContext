## React-Router-Dom Private Routes

<img src="https://images.unsplash.com/photo-1597600159211-d6c104f408d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHB5cmFtaWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="RRD" width="350" />

### Setup

`pnpm i react-router-dom` for latest version

child route must have path of parent (e.g. '/parent/...')

```JavaScript
<Route path='/parent'>
    <Route path='/parent/child' />
</Route>
```