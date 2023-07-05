import Link from "next/link";
import Image from "next/image";

const FeedbackItem = ({srcLogo,title,text,srcAvatar,name,position}) => {
  return (
    <div className="feedback-item wow fadeInUp delay-0-6s">
      <div className="author-logo">
        <i className="far fa-quote-right" />
        <Image   src={srcLogo} alt="Logo" />
      </div>
      <h4>{title}</h4>
      <p>
        {text}
      </p>
      <div className="feedback-author">
        <Image   src={srcAvatar} alt="Author" />
        <div className="content m-2">
          <h5>{name}</h5>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};
export default FeedbackItem;
