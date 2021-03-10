import { useState } from 'react'

export function InfoCard () {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState([]);
  const submit = () => { 
    setPersons( state => [ ...state, <NewCard key={Math.random()} name={name} surname={surname} date={date} />]);

    setName("");
    setSurname("");
    setDate("");
  };

  const styles = {
    infoCard: {
      margin: "50px",
      minHeight: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      margin: "20px",
      padding: "20px",
      width: "300px",
      height: "260px",
      borderRadius: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "220px",
      height: "25px",
      margin: "10px",
      borderRadius: "2px",
      border: "1px solid grey",
      padding: "10px",
    },
    button: {
      backgroundColor: "green",
      color: "white",
      border: "none",
      fontWeight: "bold",
      borderRadius: "2px",
      width: "70px",
      padding: "10px",
    },
    card: {
      fontSize: "16px",
      margin: "20px",
      padding: "20px",
      marginLeft: "150px",
      width: "300px",
      height: "260px",
      backgroundImage: "url(https://image.freepik.com/free-vector/white-abstract-background-in-3d-paper-style_23-2148390818.jpg)",
      borderRadius: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      backgroundColor: "white",
      borderRadius: "100px",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    }
  }

  function NewCard ({name,surname,date}) {
    return (
      <article style={styles.card} className="card">
        <img style={styles.logo} src="https://pics.freeicons.io/uploads/icons/png/4664092721557740377-64.png" alt="logo"></img>
        <p>{name} {surname}</p>
        <p>Age {date}</p>
      </article>
      )
  }

  return (
    <div style={styles.infoCard} className="infoCard">
      <div style={styles.info} className="info">
        <h3>Create your card</h3>
        <input style={styles.input} type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
        <input style={styles.input} type="text" placeholder="Surname" value={surname} onChange={(event) => setSurname(event.target.value)}/>
        <input style={styles.input} type="text" placeholder="Age" value={date} onChange={(event) => setDate(event.target.value)}/>
        <button style={styles.button} onClick={ () => submit() }>Сreate</button>
      </div>
      <div>{ persons }</div>
    </div>
  )
}
