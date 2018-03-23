Use React Navigation to create two screens: List and Detail. Add a button to navigate from list -> detail. Use the following configuration:
Give the List screen a headerbar title of 'Contacts'
Make sure the headerbar has a background colour of #2a3daa, with white text. If you are on iOS, don't forget the statusbar text colour too.
Pull down the list of contacts from here and put it into your project filesystem.
Import the contacts and use FlatList to render each contact in the List screen. Each item should:
have a height of 50
display the contact name with size 18 font, padded from the left/right hand side of the screen by 10, and vertically centered inside the item
have a background colour of '#fff', changing to '#e4e4e4' when tapped
be separated from other items with a line of height 1, colour '#ddd' and marginLeft of 10.
When an item is tapped in the List, navigate to the Detail screen, passing in the corresponding contact. Here, render the following, using the contact data:
The contact's name should be displayed in the headerbar.
The content below the headerbar should be horizontally padded by 20.
The contact's picture should be displayed in the main content area, below the headerbar. It should be 200x200 with a bottom margin of 10, and should be horizontally centered.
The contact's gender, address and company should be rendered below the picture. Each line should be of font size 18, and have a vertical margin of 5.
The contact's gender should be displayed in Title case, prefixed with is. So, if Joe Bloggs is male, this line should read Joe Bloggs is Male.
The contact's address should be prefixed He lives at or She lives at, depending on the contact's gender.
The contact's company should be prefixed He works at or She works at, depending on the contact's gender.
The contact's favourite film should be prefixed His favourite film is or Her favourite film is, depending on the contact's gender.
