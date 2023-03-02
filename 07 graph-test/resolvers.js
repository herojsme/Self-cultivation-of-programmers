const db = require("./db");

const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  students: () => db.students.list(),
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  // 变量查询
  sayHello: (root, args, context, info) =>
    `hi ${args.name},graphQL server say hello to you`,
  setFavouriteColor: (root, args) => {
    return "Your Fav Color is :" + args.color;
  },
};

const Mutation = {
  createStudent: (root, args, context, info) => {
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName,
    });
  },
};

//嵌套查询
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName;
  },
  college: (root, args, context, info) => {
    return db.colleges.get(root.collegeId);
  },
};

module.exports = { Query, Mutation, Student };
