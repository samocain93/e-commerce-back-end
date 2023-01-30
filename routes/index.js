const router = require('express').Router(); // require express router module
const apiRoutes = require('./api'); // bring in api routes

router.use('/api', apiRoutes); // setting '/api' path as the main route

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>") // sending back error for the incorrect route
});

module.exports = router;