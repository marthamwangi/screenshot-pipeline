# screenshot-pipeline
Setting up a CI/CD workflow which produce an always-up-to-date screenshot of the homepage and keep it updated as changes are done on the code.

# Implementation Details:
* **Front-end** - React</br>
* **Test Suite** - Node facilitated by jest
* **Screenshot Library and Visual regression testing** - jest-image-snapshot</br>
* **Version Control host** - Github </br>
* **CI/CD** - GitHub Actions

# Requirements
 &#9745; Create a webpage with any technology you want (a simple create-*-app can suffice) or use a webpage you already have or an open source project you can easily fork

 &#9744; Create a script that takes a screenshot of the webpage.

 &#9744; Set up a trigger to take a new screenshot every time you commit to the main branch of the repo.

 &#9744; Note that the screenshot should be taken by code running in the CI/CD environment, not on your own machine; you want the screenshot to look just like production

 &#9744; Include that screenshot in your README to show off.

 &#9744; From now on, your README should always display an up-to-date screenshot of your webpage without any other manual intervention other than pushing to the main branch

# For an extra challenge

 &#9744; Use the same system to implement visual regression testing on that screenshot.

 &#9744; Perform some image manipulation on the screenshot before inserting it in the README. A good e
