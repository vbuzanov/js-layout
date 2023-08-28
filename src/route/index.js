// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const blog = require('./blog')
const community = require('./community')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', blog)
router.use('/community', community)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
