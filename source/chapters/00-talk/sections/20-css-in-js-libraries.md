---
title: CSS in JS libraries
---
Two types:

* Template strings
* Objects

~

A template string is a feature of ES6. They allow us to use strings spanning
over multiple lines instead of concatenating them

```javascript
let templateString = `
I love
cupcakes
`;

let oldString = '/n' +
'I love/n' +
'cupcakes/n';
```

~

It also gives us the ability to inline code, *within the string*

```javascript
let pastry = 'cupcake';

console.log(`I love ${pastry}`); //Outputs "I love cupcakes"
```

~

A *tagged template string* is a function that takes a template string as an argument. This
function needs to be defined before being used.

```javascript
let pastry = 'cupcakes';
function print(strings, value) {
    console.log('Strings:', strings);
    console.log('Value:', value);
}

print`I love ${pastry}` //Outputs I love cupcakes
```

~

**`styled-components`**
* Uses ES6 template strings
* Common CSS syntax
* Theming support

~

Example styled-components

```javascript
const Button = styled.button`
      background-color: green;
      &:hover {
          background-color: red;
      }
`;

class App extends Component {
    render() {
      return (
          <div>
              <Button>Click me!</Button>
          </div>
          )
    }
}
```
~

Old way
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div>
        <button class="button">Click me!</button>
    </div>
</body>
</html>
```

```css
.button {
    background-color: green;
    font-size: 0.5em;
}
```


~

With `styled-components` the CSS rules are automatically vendor prefixed.

~

**`aphrodite`**
* Khan Academy
* Uses objects
* Server-side rendering

~

Example aphrodite

CSS in JS way
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <button className={css(styles.button)}>Click me!</button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        ':hover': { backgroundColor: 'red' },
    },
});
```

~

Old way
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div>
        <button class="button">Click me!</button>
    </div>
</body>
</html>
```

```css
.button {
    background-color: green;
    font-size: 0.5em;
}
```

~

**`glamorous`**
* Uses objects
* Server-side rendering
* Theming support

~

Example glamorous

```javascript
const Button = glamorous.button({
    backgroundColor: 'green',
    '&:hover': {
        backgroundColor: 'red'
    },
});

class App extends Component {
    return () {
        return (
            <div className="App">
                <Button>Click me!</Button>
            </div>
        )
    }
}
```

~

Old way
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div>
        <button class="button">Click me!</button>
    </div>
</body>
</html>
```

```css
.button {
    background-color: green;
    font-size: 0.5em;
}
```


~

Thank you!

Want to take a course in Malmö?
- The New Angular
- ReactJS
- JavaScript Foundation
