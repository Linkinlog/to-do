const mongoose = require('mongoose');
const db = process.env.MONGO;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connectered');
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
