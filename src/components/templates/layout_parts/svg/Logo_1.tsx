type props = {
  height: string;
  width: string;
};

const Logo_1 = (props: props): JSX.Element => {
  return (
    <svg height={props.height} width={props.width} viewBox="0 0 24 24" fill="#000000">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z" />
    </svg>
  );
};

export default Logo_1;
