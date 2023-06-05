
const Card = ({monster}) => {

    const monsterId = monster.id;
    const monsterName = monster.name; 
    return (
      <div className="card-container">
        <img
          alt={`monster ${monsterName}`}
          src={`https://robohash.org/${monsterId}?set=set2&size=180x180`}
        />
        <h2> {monsterName} </h2>
        <p>{monster.email}</p>
      </div>
    );
  
    }

export default Card;
