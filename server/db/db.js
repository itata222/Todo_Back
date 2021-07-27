const mongoose = require('mongoose')

mongoose.connect(process.env.TODO_MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});