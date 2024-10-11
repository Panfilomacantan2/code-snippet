import mongoose, { Schema } from 'mongoose';

const SnippetSchema = new Schema({
	user_id: {
		type: String,
		required: true,
	},
	codeString: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 2000, // Limit the confession length to 2000 characters
	},
	author: {
		type: String,
		default: 'Anonymous',
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
	bookmarked: {
		type: Boolean,
		default: false,
	},
});

// Export the model, or create it if it doesn't exist already
const Snippets = mongoose.models.snippets || mongoose.model('snippets', SnippetSchema);

export default Snippets;
