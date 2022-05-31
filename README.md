# artsite
art site for brother henry
https://gray-desert-03f6edd1e.1.azurestaticapps.net/
## instructions if you just want to upload or remove images:
1. go to `/pieces`
2. use the github website to add or remove images and edit the data file that contains image info.

## basic git instructions for non-programmers once they are set up:
1. in git bash, navigate to artsite repository (directory/folder)
2. `git pull` to reflect what's on github
3. It may will open something with blue text if there are remote changes here on github. to get through this, type `:wq` and press enter
4. make your changes (add image files to `/pieces`, add image data for site visitors)
5. `git add *` and also `git status` to confirm your changes are what you want them to be
6. `git commit -am "whatever commit name I choose"` or `git stash` if you want to throw away your changes
7. git push