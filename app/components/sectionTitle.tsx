interface IProps {
  title: string;
  sizeClassName?: string;
}

function SectionTitle(props: IProps) {
  return (
    <h1
      className={`${
        !!props.sizeClassName ? props.sizeClassName : "md:text-2xl text-xl"
      } font-extrabold text-center py-10 bg-primary-gradient bg-clip-text text-transparent max-w-5xl items-center m-auto`}
    >
      {props.title}
    </h1>
  );
}

export default SectionTitle;
