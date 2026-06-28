# Demo of Parcel bug

**Repro steps:**

1. `yarn build`
2. `yarn start`
3. Go to `http://localhost:3000`

**Expected behavior:**

The text on the page is a URL to the built style.css, something like `http://localhost:3000/style.41cfa6c5.css`. Going to this URL returns the actual contents of style.css.

**Actual behavior:**

The text on the page is `http://localhost:3000/9Lg9I`. Going to this URL results in a 404.

**Workaround:**

1. Delete `"src/b.js"` from the `sources` list in package.json.
2. `yarn clean` (deletes output files and parcel cache)
3. Repeat the above repro steps.

**Note on the setup**: index.html is intentionally not included in the Parcel build, and is manually copied into the dist dir after building, so that Parcel doesn't touch the `<script>` tag. The bug only happens in the JS file built as its own entry, not in the version that gets built as a dependency of index.html.
