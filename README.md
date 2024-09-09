# Magic Eight Ball Project

In this exercise, you'll build a simulation of a classic kid's toy, the Magic Eight Ball.

This should appear as a black ball that initially reads "Think of a Question"

When you click on the ball, it should choose a random answer & the matching color for that answer.

#### Step One: *EightBall* Component

This application will consist of two components:

- [x] ***App***
A simple component that just rneders an *EightBall* component.

- [x] ***EightBall***
The component for the magic eight ball.

- [x] The *EightBall* should take a single property, *answers*, which should be an array of objects, with each object having a key for*msg* and *color*. For example, to use the answers from the classic commercial product, you could use these:

```js
[
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]
```

- [x] The *EightBall* will need state to keep track of the current color and message text, and this state should initially be "black" and "Think of a question"

- [x] Make it so that the ball chooses a random message when it is clicked on. This should change the background color of the ball and the message.