# Apollo Client - useSuspenseQuery

## How to use

```shell script
$ npm install @brainly/use-suspense-query
```

To use hook in your app you have to provide apollo client via. `SuspenseQueryProvider` i.e:

```jsx
import { SuspenseQueryProvider } from 'use-suspense-query';

const apolloClient = new ApolloClient({
  link,
  cache,
});

export function App() {
  return (
    <SuspenseQueryProvider client={apolloClient}>
      <div>
        <OtherComponent />
      </div>
    </SuspenseQueryProvider>
  );
}
```

Now you're able to use hook in your app. Example usage:

```jsx
import { qgl } from '@apollo/client';
import { useSuspenseQuery } from 'use-suspense-query';

const myQuery = gql`
  query getSth($id: ID!) {
    data(id: $id) {
      sth
    }
  }
`

function DataComponent() {
  const data = useSuspenseQuery(myQuery, {
    variables: {
      id: '1234'
    }
  });

  return (<div>display {data} here</div>);
}

export function App() {
  return (
    <Suspense fallback={...YourFallbackComponent}>
      <DataComponent />
    </Suspense>
  )
}
```

### Hook API

```jsx
useSuspenseQuery(query: GraphqlQuery, options: Options): Response of ApolloClient.query()
```

### Hook Options

| Option      |                                                                                             Description                                                                                              |   Type |
| ----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----: |
| variables   |                                                                                           query variables                                                                                            | Object |
| fetchPolicy |                                                                    fetch policy option passing to ApolloClient fetchPolicy field                                                                     | String |
| uniqueKey   | In default that key is generated based on variables and query, but to be sure that your request is totally unique, you should pass this field with some unique value - recommended to add uniqueKey! | String |
