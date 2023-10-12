const typeDefs = `
type User{
    _id:ID
    username:String
    email:String
    bookCount:Int
    savedBooks:[Book]!
}
type Book {
    bookId: String!
    authors: String
    description: String!
    image: String
    link:String
    title:String!
  }
  input BookInput {
    bookId: String!
    authors: String
    description: String!
    image: String
    link:String
    title:String!
  }
  
type Auth
{
    token:ID!
    user:User
}
type Query{
    me(userId:ID,username:String):User
}
type Mutation{
    createUser(username:String!,email:String!,password:String!):Auth
    login(username:String!,email:String!,password:String!):Auth
    saveBook(input:BookInput):User
    removeBook(bookId:String!):User
}
`;
module.exports = typeDefs;
