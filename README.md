# ScoolFaces
ScoolFaces is a a small networking application for families in pre-school through elementary school (primary school in the UK).

The goal of the app is to build community in schools, by putting parents in classrooms in contact with each other, to get parents in the classroom to be able to put names with faces with all the kids and other parents. 

In public schools in the US, the amount of parent participation in a school directly correlates to the success of that school.   Parent communities in school who work together can do amazing things.   Parents who socialize and get to know each other create better schools. They support the teachers, the kids have a network beyond the artificial confines of an educationa institution. The school raises more money, and kids do better. And people have fun. 

The school CIS DeAvila in San Francisco is a testamant to that, and the inspiration for this software.  The school was started only 5 years ago, and an amazing community sprung up organically.  The community started with worried parents who were placed in a brand new school and taking what felt like a huge risk to send their kids to a brand new unkown school that they hadn't requested. CIS developed a core community that have seeded an incredible community and made CIS a top performing school in San Francisco in only a few years since inception.   Besides having an incredible principal and teachers, the main driving force was the parent community.    A community that got together to talk.. to drink..  to plan. To have fun. To support kids.   And one that has many parent activities such as school wide camping trips, parent bands, dad's ski trpis, many social nights.. all parent organized.

ScoolFaces takes the core of that... getting parents to recognize and talk to each other, to get together outside of school duties, and will "make an app" of it.  Core functions are a visual address book and communications.  

The initial function is to put a name and face with every kid, and parent in the classroom.  As a parent of two kids, I have a hard time meeting and remembering the names of the kids and parents in my class.  ScoolFaces was born out of that one key need - what are the names an faces of the parents and kids in my  childs school? 

It also makes contact information easily availible, and is the easiset way to send messages and communicate with class members.  Currently, there are many school-wide email lists in use, but you don't know the full name or face of a parent emailing. Likewise, you see kids/parents at school, talk to them, but don't know their names.  Sometimes, that happens many times in a row. Embarassing. 

Simple problem.. simple solution. ScoolFaces.  (why the funky name?  I misspelled "School" when creating this git repository!  And the domain was availible. Viola.)


##Features

- Join the school(organization)
- Join a group(classroom) 
- Create a profile of themselves (user)
 - simple picture, name, bio, email 
 - Create family members (kid(user), spouse(user)). Kids probably don't even get email addresses.
- Unlike most social networks, one user can create multiple people, grouped in a family, so the data model is different than average networking app. 
- There is light messaging - ie leave a mesasge for others in the group
- Messageing is email or sms based, or post a picture

## Design

Current design with high level features - PDF http://uploadir.com/uploads/uxj8ro0w/downloads/new
Currrently desiging withan "Outside-in" approach.  The intention is to make the UI usable and fully mocked out in HTML. 

## Tech

npm install

You need to set an environment variable to a Mongo db.. if you deploy 