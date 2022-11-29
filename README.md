# Development

### Link to Deployed Website
https://github.com/AnonymousRhino768/development-cs1300

### Goal and Value of the Application
Goal and value of this application is to give users a way to follow 
politicians and their votes while also staying unbiased

### Usability Principles Considered
I considered using JSON files instead of a plain list, which is what I used for about half of my
time working on the project until I ran into some bugs. I switched to a big list of items and it 
worked much better. I also had a lot of trouble figuring out the splice funtion for lists. I 
did not know that splice returned something so i was setting things equal to it and wondering 
why it wasn't working.

### Organization of Components
I have a main list of all the politicians that include their names, parties, pictures, vote counts
as well as variables for use in the main funciton such as buttonText and isFollowing. All of the
buttons on the menu bar at the top of the page are handled by one function, filterList. I also 
have other helper functions search, and buttonChange which are used to give the user a more fluid 
experience. The filterList function uses a dummy list or a variable list which I found much easier to 
manipulate and chagne rather than using the useState list. So inside of the filterList function, dummyList 
is really the list being changed, where the useState list gets set to the dummyList at the end of the 
function. 

### How Data is Passed Down Through Components
Data is stored in the useState list. It's initial value is equal to that of the entire list of 
politicians, so when filterList is called, the dummyList gets populated with the elements of 
the useState list. 

### How the User Triggers State Changes
The user will trigger state changes by pressing any of the buttons presented to them. 
If they press either the Democrat or Republican buttons, the state of the list 
being rendered changes, this changing what is displayed to them. Users can also 
choose to follow different politicians, when they do this the state of the 
'following' list changes and addes whomever the person decided to follow. 
