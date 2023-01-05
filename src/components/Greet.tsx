type Props = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: Props) {
  const { messageCount = 0 } = props;
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages`
        : `Welcome Guest!`}
    </h2>
  );
}
