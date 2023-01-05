type Props = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet(props: Props) {
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
        : `Welcome Guest!`}
    </h2>
  );
}
