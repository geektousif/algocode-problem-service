const NotImplemented = require("../errors/notImplemented.error");
const NotFoundError = require("../errors/notFound.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblem(req, res) {
  res.json({ message: "problem controller check ok" });
}
async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      data: newProblem,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}
async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problems fetched successfully",
      data: response,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}
async function getProblem(req, res, next) {
  try {
    const { id } = req.params;
    const problem = await problemService.getProblem(id);
    if (!problem) {
      throw new NotFoundError("Problem", id);
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem fetched successfully",
      data: problem,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}
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
