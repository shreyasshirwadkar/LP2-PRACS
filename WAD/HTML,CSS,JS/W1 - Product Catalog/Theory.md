| **Question**                        | **Answer**                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| What is DOM?                        | The Document Object Model represents the HTML elements as a tree-like structure which we can modify using JavaScript. |
| What is `innerHTML`?                | A property that allows us to read or write the HTML content inside an element.                                        |
| What does `slice()` do?             | Returns a shallow copy of a portion of an array without modifying the original array.                                 |
| How does pagination work here?      | We display 4 items per page by slicing the product array from the start index to end index based on the current page. |
| What is `window.onload` used for?   | It ensures that the renderTable function is executed only after the DOM is fully loaded.                              |
| Why did you use a separate JS file? | To separate logic from structure, making the code modular, maintainable, and reusable.                                |

---

### 👇 Code snippet:

```js
const start = (currentPage - 1) * itemsPerPage;
const end = start + itemsPerPage;
const currentProducts = products.slice(start, end);
```

---

### 🔍 What’s happening?

#### ✅ 1. **`itemsPerPage`**:

This is the number of items (products) you want to show per page — for example, `10`.

#### ✅ 2. **`currentPage`**:

This is the page number the user is currently viewing — e.g., Page 1, Page 2, etc.

---

### 🔢 Let’s say:

- `itemsPerPage = 10`
- `currentPage = 2`

#### Step-by-step:

**1. Calculate `start`:**

```js
start = (2 - 1) * 10 = 10
```

Start index = 10 → skip the first 10 products

---

**2. Calculate `end`:**

```js
end = 10 + 10 = 20
```

End index = 20 → up to (but not including) the 20th product

---

**3. Slice the array:**

```js
currentProducts = products.slice(10, 20);
```

This means get products from index `10` to `19` (i.e., the **next 10 products**)

---

### 🧠 Why use `.slice(start, end)`?

- `.slice()` returns a **shallow copy** of the array between `start` and `end` (excluding `end`).
- This allows you to **display only the products for that page**, not the entire list.

---

### 🗣️ In your oral exam, you can say:

> "To implement pagination, we calculate the starting and ending indexes based on the current page and number of items per page. We then use `slice(start, end)` to extract just that portion of the array to display."
