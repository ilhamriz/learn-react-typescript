## Notes

### useState Future Value

When we inisialize the state with *null*, we can't just change its value with another data type. <br>
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
  

