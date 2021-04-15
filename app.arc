@app
local

# note: application/x-www-form-urlencoded and multipart/form-data can ONLY post
# if you wanted to build out the update/delete with xhr or fetch you can use put, patch and delete
@http
post /cats               # create a cat
get /cats                # read cats
post /cats/:catID        # update a cat w an html form
post /cats/:catID/delete # delete a cat w an html form

@tables
cats
  catID *String
