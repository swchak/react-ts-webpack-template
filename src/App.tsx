import { FC } from "react";

interface MessageProps {
  greeting: string;
  user: string;
  projectTitle: string;
}

const App: FC<MessageProps> = (props: MessageProps) => {
  return (
    <div className="app-id">
      <h1 className="greeting-id">{props.greeting}</h1>
      <h1 className="user-id">{props.user} </h1>
      <h2 className="title-id">{props.projectTitle}</h2>
    </div>
  );
};

export default App;
