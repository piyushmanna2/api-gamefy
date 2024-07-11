const categoryModel = require('../model/Category');

const getCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find({ cat_status: 1 });
        if (categories.length === 0) {
            return res.status(404).json({ status: false, data: [], message: 'No categories found.' });
        }
        res.json({ status: true, data: categories });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
}

module.exports = { getCategory }