import '../styles/globals.css'
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient, {gql} from 'apollo-boost'


function MyApp({Component, pageProps}) {
    const client = new ApolloClient({
        uri: 'http://localhost:3000/api/graphql'
    })
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
