import { Link } from "react-router-dom";


export default function ButtonA(props) {
  return (
    <>
      <Link className={props.className}  to={props.href} >

        {props.text}
        

        <i className={props.iconClassName} />
      </Link>
    </>
  );
}

