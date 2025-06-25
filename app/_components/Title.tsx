const Title = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="text-gray-400 font-bold text-xs mt-6 mb-3 uppercase">
      {props.children}
    </h2>
  );
};

export default Title;
