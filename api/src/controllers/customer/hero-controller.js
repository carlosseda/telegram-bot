const mongooseDb = require('../../models/mongoose')
const Hero = mongooseDb.Hero

exports.findOne = async (req, res, next) => {
  try {
    const whereStatement = {}
    whereStatement.deletedAt = { $exists: false }
    whereStatement.name = req.params.name

    const result = await Hero.findOne(whereStatement)
      .lean()
      .exec()

    const response = result.locales[req.userLanguage]

    res.status(200).send(response)
  } catch (err) {
    next(err)
  }
}
