import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
	// If connected, return that connection
	if (cached.conn) return cached.conn;

	if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

	cached.promise =
		cached.promise ||
		mongoose.connect(MONGODB_URI, {
			dbName: 'next-events',
			bufferCommands: false,
		});
	cached.conn = await cached.promise;
	return cached.conn;
};

// All done to limit database connections to utilize resources more efficiently.