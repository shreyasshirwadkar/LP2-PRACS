## Music Database
##### (using Node.js, MongoDB and Express.js)
___

### Steps to run:
1. Run `npm init` in the project directory.
2. Install the dependencies using `npm install express mongoose ejs`.
3. Start the MongoDB server in your machine.
4. Create these files:
   - Main server file: `app.js`
   - Song model: `models/song.model.js`
   - Index view: `views/index.ejs`
   - CSS file: `public/styles.css`
5. Copy paste the code in these files.
6. To run the app, do **`node app.js`** and visit `http://localhost:3000` in your browser.
___

### Steps to add extra attributes to the schema:
If you want to add extra attributes to the music collection schema (*actor* and *actress*), follow these steps:
1. Update the Song Model in the `song.model.js` file. Modify the `songSchema` to include the new *actor* and *actress* fields.
2. Update the Form Fields in the `index.ejs` file, add new input fields for *actor* and *actress* in the "Insert Song" form.
3. Update the Filter Fields in the `index.ejs` file, add new input fields for *actor* and *actress* in the filter form.
4. Update the Filter Logic in the `app.js` file, modify the `/songs/filter` route to include the new *actor* and *actress* filters.
5. Update the Table Columns in the `index.ejs` file, add new table columns for *actor* and *actress*.