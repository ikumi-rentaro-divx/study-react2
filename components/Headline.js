import styles from "@/styles/Home.module.css";

export default function Headline(props) {
  return (
    <>
      <button onClick={props.onClick}>ボタン</button>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>
    </>
  );
}
