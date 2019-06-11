const { ApolloServer, gql } = require('apollo-server');

//function to return object with the input parameters
const dummyRecord = (firstName, middleName, lastName, emailAddress) => ({ firstName, middleName, lastName, emailAddress });
     
const personData = [
    dummyRecord('Comfort', 'Omodunni', 'Odugbemi', 'joshua.odugbemi@andela.com'),
    dummyRecord('Ireti', '', 'Adunoluwa', 'ireti.odugbemi@andela.com'),
    dummyRecord('Olukayode', 'Emmanuel', 'Odugbemi', 'olukayode.odugbemi@andela.com'),
    dummyRecord('Bukola', 'Elizabeth', 'Odugbemi', 'bukola.odugbemi@andela.com'),
    dummyRecord('Felicia', '', 'Odugbemi', 'felicia.odugbemi@andela.com'),
];

//graphQl scheme definition
//
const typeDefs = gql`
type Person{
    firstName:String
    middleName:String
    lastName:String
    emailAddress:String
}

type Query{
    person:[Person]
}
`;

//grapql resolvers
//
const resolvers = {
    Query: {
        person: () => personData,
    },
}

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
});
