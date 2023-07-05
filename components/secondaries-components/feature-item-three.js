
const FeatureItemThree = ({title,text,srcIcon}) => {
  return (
    <div className="feature-item-three wow fadeInRight delay-0-1s">
      <i className={srcIcon} />
      <div className="content">
        <h4>{title}</h4>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};
export default FeatureItemThree;
