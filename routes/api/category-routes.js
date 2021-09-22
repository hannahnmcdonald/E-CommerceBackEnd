const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
//   Category.findAll().then((category) => {
//     res.json(category);
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   Category.findOne(req.params.id).then((category) => {
//     res.json(category);
// });

// router.post('/', (req, res) => {
//   // create a new category
//   Catagory.create().then((category) => {
//     res.json(category);
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Catagory.update().then((category) => {
//     res.json(category);
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   Catagory.destroy().then((category) => {
//     res.json(category);
// });

module.exports = router;
