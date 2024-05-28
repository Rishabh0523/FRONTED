import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Home pages </h1>
      <User name="Rishabh"/>
      <User name="Vishal"/>
      <User name="Nisha"/>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <p>User name is {props.name}</p>
    </div>
  )
}
