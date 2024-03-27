import { Icon } from '../Icon/index';
import './style.css';

export const Option = (props) => {
  const { type, text, onSelected } = props;
  const handleClick = (event) => {
    //console.log(text);
    onSelected(type);
  };

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
