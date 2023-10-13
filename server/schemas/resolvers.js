const { resolveObjMapThunk, isInputType } = require("graphql");
const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
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
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await User.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      console.log(context.user);
      if (context.user) {
        const user = User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedBooks: input,
            },
          },
          { new: true }
        );
        return user;
      }
      throw AuthenticationError;
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const user = User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return user;
      }
      throw AuthenticationError;
    },
  },
};
module.exports = Resolvers;
