//* Creating React Component using regular function

// function Greeter(): JSX.Element {
//   return <div>Greeter</div>;
// }

//* React component using arrow function and 'React.FC'
type Greeter = {
  name: string;
};
const Greeter: React.FC<Greeter> = (props: Greeter) => {
  const { name } = props;
  return <h1>Hello, {name}</h1>;
};

export default Greeter;
