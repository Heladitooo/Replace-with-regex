# Replace with regex

This program is a small project created in Javascript that isco coo regular expressions that creates a thousands separator

### Principal use:

To put the (,) we have to count backwards so I invert the string and then if I match the regular expression.
The main regular expression you use is this: `/ \ d {1,3} / g` which finds a string of numbers (minimum one and maximum three) and then converts it to a string and then uses` .split ("" ) `so that I keep the commas included, then I turn the text to the right and then I convert it to a string :D.

#### extra:

I use another regular expression: `/ ^ \ d * $ /` to detect if there are only natural numbers in the string, but return a string: `" Enter a valid number "`