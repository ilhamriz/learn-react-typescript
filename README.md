## Notes

### Wrapping HTML Elements

use `ComponentProps` so we can easily use `children` and `{...rest}`<br>
Example: `ComponentProps<"button">`<br><br>

when we want to strict the type of children, we can use `Omit<>`<br>
Example: `Omit<ComponentProps<"button">, "children">`