## Notes

### useState Future Value

When we initialize the state with **null**, we can't just change its value with another data type. <br>
So the solution is to give the Explicit type to the useState.<br><br>

Example :
<html>
<body>
<pre>
type AuthUser = {
  name: string;
  email: string;
};

const [user, setUser] = useState<AuthUser | null>(null);
</pre>
</body>
</html>


### useState Type Assertion

When we didn't want to use **null** as a initialize value, we can use `{} as AuthUser` instead.

Example : <br>
`const [user, setUser] = useState<AuthUser>({} as AuthUser);`<br>

and we don't need the `?` when we call the object. <br>
`user?.name` => `user.name`