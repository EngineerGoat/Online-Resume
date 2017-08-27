var bio = {
	"name": "Deborah E. Padilla",
	"role": "Front-End Web Developer",
	"contact": {
		"mobile": "201-749-6963",
		"email": "deborahelizabethpadilla@gmail.com",
		"github": "deborahepadilla",
		"twitter": "@deborahepadilla",
		"location": "New York, NY"
	},
	"biopic": "images/bio.jpg",
	"welcomeMsg": "I am a self-taught Web Developer.",
	"skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Brackets", "Google Chrome"]
};

var work = {
	"jobs": [
	{
		"employer": "Freelancer",
		"title": "Equipment Design Engineer",
		"location": "New York, NY",
		"dates": "2014-Current",
		"description": "Developer"
	},
	{
		"employer": "Freelancer",
		"title": "Child Care Provider",
		"location": "Mahwah, NJ",
		"dates": "2003-2013",
		"description": "Managed children of all ages and abilities."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": "2017",
		"description": "Created a website in HTML and CSS.",
		"images": ['']
	},
	{
		"title": "Animal Trading Cards",
		"dates": "2017",
		"description": "Created a website in HTML.",
		"images": ['']
	},
	{
		"title": "Online Resume",
		"dates": "2017",
		"description": "Created a website in HTML, CSS, JavaScript, etc.",
		"images": ['']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Udacity",
		"location": "Online",
		"degree": "iOS Developer Nanodegree",
		"majors": ["iOS"],
		"dates": "2017",
		"url": "www.udacity.com"
	},
	{
		"name": "Uadacity",
		"location": "Online",
		"degree": "Associate of Science",
		"majors": ["Front End Web Development"],
		"dates": "Current",
		"url": "www.udacity.com"
	}
	],
	"onlineCourses": [
	{
		"title": "iOS Development",
		"school": "Udemy",
		"dates": "2014",
		"url": "www.udemy.com"
	},
	{
		"title": "Front End and iOS",
		"school": "Udemy",
		"dates": "2016",
		"url": "www.udemy.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
	
	$(".welcome-message").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
};

work.display = function() {
	for (var job = 0; job < work.jobs.length; job++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (var project = 0; project < projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (var school = 0; school < education.schools; school++){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (var onlineClass = 0; onlineClass < education.onlineCourses; onlineClass++){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);