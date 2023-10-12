const { resolveObjMapThunk, isInputType } = require("graphql");
const { User } = require("../models");
const { singleToken, AuthenticationError } = require("../utils/auth");
const Resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = singleToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        AuthenticationError;
      }
      const correctPw = await User.isCorrectPassword(password);
      if (!correctPw) {
        AuthenticationError;
      }
      const token = singleToken(user);
      return { token, user };
    },
    saveBook: async (parent, input) => {
      const user = User.findByIdAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: input } },
        { new: true }
      );
    },
    removeBook: async (parent, { bookId }, context) => {
      const user = User.findByIdAndDelete(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId: bookId } } },
        { new: true }
      );
    },
  },
};
module.exports = Resolvers;
