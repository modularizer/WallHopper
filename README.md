# WallHopper
Bypass article paywalls with one line of javascript code:

    fetch(location.href).then(r=>r.text()).then(r=>document.body.outerHTML=r)
    
which can be executed in the address bar as:
    javascript:fetch(location.href).then(r=>r.text()).then(r=>document.body.outerHTML=r)

## Ways to Execute

 ### Using Address Bar
 As a security measure Chrome will not let you paste a string starting with "javascript:" so that people don't unintentionally execute code. Therefore, do the following
 
1. type the letter **`j`**
2.  then paste the following: **`avascript:fetch(location.href).then(r=>r.text()).then(r=>document.body.outerHTML=r)`**
3. Press `Enter`
		
###  Using Developer Console
1.  Open the developer console `Ctrl+Shift+i` in Google Chrome or Microsoft Edge
2. Click on the `Console` tab if not already selected
3. Paste the following `fetch(location.href).then(r=>r.text()).then(r=>document.body.outerHTML=r)`
4. Press `Enter`

## Explanation
Many webpages use "soft" paywalls in which the article or content is sent to the browser and then blocked or blurred by javascript. Because the host server is publicly distributing the article content, reading it is as simple as preventing the javascript from blurring the article which has already been sent to our browser. This could be done many ways: disabling javascript in browser, using the F8 key to pause script execution at exactly the right time, etc. The method here is to perform an http request to fetch the content of the webpage, then replace the html of the page with the html returned by the web request.

## Dissection

   `location.html` : this is the url of the current page https://developer.mozilla.org/en-US/docs/Web/API/Location/href

`fetch(location.html)`:  fetch(https://developer.mozilla.org/en-US/docs/Web/API/fetch)  performs a GET request to the url of the current page and returns a Promise(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to the result. Basically this means it immediately returns a result, but since the web request takes time, that result (Promise) takes some time before it resolves

   `.then()`: handles the result of the Promise once it resolves
   `r => r.text`: this is an arrow function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) which takes in a response, then calls the method text() which returns another Promise which resolves as the HTML string
   
   `r => document.body.outerHTML = r` Which the response text resolves, we set the HTML of the body of the page (this is what you see) to the html text returned by the web request
