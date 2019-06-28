module.exports = {
  port: process.env.PORT || 3000,
  // db: process.env.MONGODB || 'mongodb://localhost:27017/onegorilla' //local
  db: process.env.MONGODB || 'mongodb+srv://schavez:schavez@cluster0-wr9kp.mongodb.net/test?retryWrites=true' // cloud mongodb
}
