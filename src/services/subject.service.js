const Subject = require("../model/subject.model");

const createSubjects = async (name) => {
  const newSubject = new Subject({
    name: name,
  });
  return newSubject;
};

const getAllSubject = async () => {
  const subject = await Subject.find();
  return subject;
};

const deleteSubject = async (id) => {
  const subject = await Subject.findByIdAndDelete(id);
  return subject;
};

module.exports = {
  createSubjects,
  getAllSubject,
  deleteSubject,
};
