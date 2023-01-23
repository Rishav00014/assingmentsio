In this website we have created get and post routes of “/” and getInternship function which takes string link as parameter.
I have use packages like cheerio , express , axios to achive the functionality .

This express app contains routes like :
1. get / : 
--  this is the default routes that is access by user when access our website.
--  generate a form to send data to node js web scraper. 
--  it checks if array contains elements is true then generate table else do nothing . 
2. post /: 
--  this is the route which post data from form of home page to express
--  after that generate the array of objects contain data of job and internship .
-- then redirect to get /.
-- where element of array generate the table contain compony name , job role, salary and link for details.

keyword process by form :
1.	job : this will result into generate table contain job posted by different compony.
2.	Internship : this will result into generate table contain internship posted by different compony.
3.	full stack : this can be use with  internship or job to get post related to full stack development.
4.	front end : this can be use with  internship or job to get post related to front end development.

example :- 
	 internship in full stack -> this will fetch all the internship related to full stack and post it to home route in form of table.
	 job -> this will fetch jobs and post it to home page by generating table of these data . 

Other keyword can be added to program if requied.
Functionality of moving through all pages can be also add.
Functionality of store data to  mongo db can also be add if required.