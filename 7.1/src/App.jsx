import DATA from "./data";
import Card from "./components/Card";
import Name from "./components/Name";
export default function DataMassaging() {

  const namesArr = () => {
    return DATA.map((person) => person.name);
  };


  const bornBeforeNinety = () => {
    return DATA.filter((person) => person.birthday.split("-")[2] < 1990);
  };

  return (
    <>
 
        {namesArr().map((personName, index) => (
          <Name key={index} personName={personName} />
        ))}
 
 
        {bornBeforeNinety().map((person, index) => (
          <Card key={index} person={person} />
        ))}
     </>
  );
}
