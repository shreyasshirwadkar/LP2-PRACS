Create a Node.js Application which serves a static website for applications like Art Gallery (Pinterest) or Restaurant or any other application.

### Steps:
1. Run `npm init` in the directory.
2. Create an `index.js` file in the directory with the following content:
   ```js
   const express = require ('express');
   const app = express ();
   const port = 3000;

   app.use(express.static('public'));
   
   app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    });
   ```
3. Run `npm install express` in the directory.
4. Inside the directory, create a folder named "public".
5. Create `index.html` file in the "public" folder. Put all the static webpage files (HTML, CSS, JavaScript, etc. files) in the "public" folder.
6. Run `node index.js` to start the static website using Node.js.
   Visit `http://localhost:3000/` in your browser to access the Node.js application.