/* eslint-disable react/jsx-key, jsx-quotes, quotes */

const Icons = () => {
  const altTags = [
    "fa fa-circle me-1",
    "fa fa-circle me-1",
    "fa fa-circle me-1",
  ];
  return (
    <div>
      {altTags.map((tag) => (
        <i className={tag} />
      ))}
    </div>
  );
};

export default Icons;
