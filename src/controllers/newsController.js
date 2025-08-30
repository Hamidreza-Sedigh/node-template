const News = require('../models/News');

module.exports = {
    // دریافت همه خبرها
    async getAllNews(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 20;
            const page = parseInt(req.query.page) || 1;
            const skip = (page - 1) * limit;

            const news = await News.find()
                .sort({ date: -1 })
                .skip(skip)
                .limit(limit);

            res.json(news);
        } catch (err) {
            console.error('❌ خطا در getAllNews:', err.message);
            res.status(500).json({ error: 'مشکلی در دریافت اخبار پیش آمد' });
        }
    },

    // دریافت یک خبر با shortId
    async getNewsById(req, res) {
        try {
            const news = await News.findOne({ shortId: req.params.id });
            if (!news) {
                return res.status(404).json({ error: 'خبر پیدا نشد' });
            }
            res.json(news);
        } catch (err) {
            console.error('❌ خطا در getNewsById:', err.message);
            res.status(500).json({ error: 'مشکلی در دریافت خبر پیش آمد' });
        }
    }
};
