import { Icon } from '../Icon/index';
import './style.css';

export const QuestionBody = (props) => {
  const { text, iconType } = props;
  return (
    <div className="question__body">
      <p className="question__text">
        {text}
      </p>
      <Icon type={iconType} />
    </div>
  );
};
