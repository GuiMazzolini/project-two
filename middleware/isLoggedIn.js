// module.exports  = (req, res, next) => {
//   // checks if the user is logged in when trying to access a specific page
//   if (!req.session.currentUser) {
//     return res.redirect("/auth/login");
//   }
  
//   // User is logged in => Open requested page 
//   next();
// };

function isLoggedIn(req, res, next) {
	// Check if user is logged in
	if (!req.session.user) {
    return res.redirect("/login")
	} 
  
  // User is logged in => Open requested page 
  next()
}

module.exports = {
  isLoggedIn
}
