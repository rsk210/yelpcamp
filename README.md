YelpCamp
  
A Node.js web application project from the Udemy course - The Web Developer Bootcamp by Colt Steele
Features
•	Authentication:
o	User login with username and password
o	Admin sign-up with admin code
•	Authorization:
o	One cannot manage posts and view user profile without being authenticated
o	One cannot edit or delete posts and comments created by other users
o	Admin can manage all posts and comments
•	Manage campground posts with basic functionalities:
o	Create, edit and delete posts and comments
o	Upload campground photos
o	Display campground location on Google Maps
o	Search existing campgrounds
•	Manage user account with basic functionalities:
o	 (disabled)
o	Profile page setup with sign-up
•	Flash messages responding to users' interaction with the app
•	Responsive web design
Custom Enhancements
•	Update campground photos when editing campgrounds
•	Update personal information on profile page
•	Improve image load time on the landing page using Cloudinary
•	Use Helmet to strengthen security
Getting Started
This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.
Clone or download this repository
git clone https://github.com/lucasweng/yelp-camp.git
Install dependencies
npm install
or
yarn install
Comments in code
Some comments in the source code are course notes and therefore might not seem necessary from a developer's point of view.
Built with
Front-end
•	ejs
•	Google Maps APIs
•	Bootstrap
Back-end
•	express
•	mongoDB
•	mongoose
•	async
•	crypto
•	helmet
•	passport
•	passport-local
•	express-session
•	method-override
•	nodemailer
•	moment
•	cloudinary
•	geocoder
•	connect-flash
Platforms
•	Cloudinary
•	Heroku
•	Cloud9
License
MIT
