


// This function will make sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its numWeeks and weeklyRevenue properties.
const checkMillionDollarIdea = (req, res, next) => 
{
  // const { numWeeks, weeklyRevenue } = req.body;
  const numWeeks = req.body.numWeeks;
  const weeklyRevenue = req.body.weeklyRevenue;

  const totalRevenue = Number(numWeeks) * Number(weeklyRevenue);
  
  if (!numWeeks || !weeklyRevenue  || isNaN(totalRevenue) || totalRevenue < 1000000) {
    res.status(400).send();
  }
  else{
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

