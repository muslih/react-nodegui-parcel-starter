import { Text, Window } from "@nodegui/react-nodegui"

const App = () => {
  const title="React NodeGui Parcel Starter"
  return(
    <Window
      windowTitle={title}
      size={{width: 1000, height: 800}}
    >
      <Text style={textStyle}>{"Hello World"}</Text>
    </Window>
  )
}

const textStyle = `
  color: green;
  background-color: white;
  text-align: center;
`;

export default App;
