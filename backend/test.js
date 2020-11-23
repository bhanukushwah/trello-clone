const columns = [
  {
    tasks: [],
    _id: "5fba0ff5886b955e3f740181",
    title: "To Do",
    createdAt: "2020-11-22T07:15:01.447Z",
    updatedAt: "2020-11-22T07:15:01.447Z",
  },
  {
    tasks: [],
    _id: "5fba0ff5886b955e3f740182",
    title: "In Development",
    createdAt: "2020-11-22T07:15:01.448Z",
    updatedAt: "2020-11-22T07:15:01.448Z",
  },
  {
    tasks: [],
    _id: "5fba0ff5886b955e3f740183",
    title: "To Be Reviewed",
    createdAt: "2020-11-22T07:15:01.448Z",
    updatedAt: "2020-11-22T07:15:01.448Z",
  },
  {
    tasks: [],
    _id: "5fba0ff5886b955e3f740184",
    title: "Finished",
    createdAt: "2020-11-22T07:15:01.448Z",
    updatedAt: "2020-11-22T07:15:01.448Z",
  },
];

const getIndex = (columnId) => {
  return columns.map((column) => column._id == columnId);
};

const index = getIndex("5fba0ff5886b955e3f740184").indexOf(true);

console.log(index);
