const NotImplemented = require("../errors/notImplemented.error");

function pingProblem(req, res) {
  res.json({ message: "problem controller check ok" });
}
function addProblem(req, res) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function getProblem(req, res) {}
function getProblems(req, res) {}
function deleteProblem(req, res) {}
function updateProblem(req, res) {}
module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblem,
};
