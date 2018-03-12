---
title: The main problems
---
Global namespace

```css
.button {
    background-color: green;
    font-size: 0.5em;
}
```

~

Isolation

No matter how well we try to isolate our styles, we always run the risk of
having our styles overridden by someone else

~

```css
.user-button {
    background-color: green;
    font-size: 0.5em;
}

<!-- later in the code -->

.user-button {
    background-color: pink;
    font-size: 1em;
}
```

~

```html
<div class="user-message">
    <button class="user-button">Send</button>
</div>
```

```html
<div class="user-form">
    <button class="user-button">Send</button>
</div>
```

~

Dependencies

```css
.main-section {
    font-size: 0.5em;
}
```

~

```html
<div class="main-content">

</div>
```

~

Dead Code Elimination

```html
<div class="panel">

</div>
```

<small>Let's say we delete the above markup. Can we be certain that it is safe to delete the class associated
with it? It may be used somewhere else on the site.</small>

~

Sharing Constants

~

Non-Deterministic Resolution

```css
.button-green {
    background-color: green;
    font-size: 0.5em;
}

.button-red {
    background-color: red;
    font-size: 0.5em;
}
```

~

The background color of the button may vary depending on which page it is located in.

In index.html
```html
<button class="button-green button-red">Click me!</button>
```

~

Due to how specificity works, the latter rule will win. But which class will be
applied in the previous example?

~

One way to solve this is to increase the specificity of the rule

```css
section > .button-green {
    background-color: green;
    font-size: 0.5em;
}
```

~

But, where do we stop?

```css
body > section > .button-green {
    background-color: green;
    font-size: 0.5em;
}
```
