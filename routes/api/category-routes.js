const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
	Category.findAll({  // find all of the categories
		include: [Product] // include its associated Products
	}).then((categories) => {
		//console.log(categories);
		res.status(200).json(categories); // if no error, send 200 status code and json of the categories
	}).catch((err) => {
		console.log(err);
		res.status(500).json(err);
		res.json(err);
	});
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
	Category.findByPk(req.params.id, {
		include: [Product]
	}).then((category) => {
		//console.log(category);
		res.json(category);
	}).catch((err) => {
		console.log(err);
		res.status(500).json(err);
	});
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((category) => {
    res.json(category);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
