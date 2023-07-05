
const FeatureItemSeven = ({icon,title,text,color=""}) => {
  return (
    <div className="col">
      <div className={`feature-item-seven mt-30 ${color} wow fadeInUp delay-0-1s`}>
        <div className="icon">
          <i className={icon} />
        </div>
        <h5>{title}</h5>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};
export default FeatureItemSeven;
