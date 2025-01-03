# Type 'string' is not assignable to type 'number'

This TypeScript code demonstrates a common type error: attempting to add a number and a string.  The type system correctly flags this as an error because the `+` operator behaves differently for numbers and strings (numeric addition vs. string concatenation).

The solution involves either ensuring both inputs are numbers or using type assertions (with caution).