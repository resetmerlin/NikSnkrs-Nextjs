/* eslint-disable react/jsx-props-no-spreading */

type IPrpos = {
  size: string;
  color: string;
};

function SvgLogIn({ size = '1rem', color = 'black' }: IPrpos) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        fill: color,
      }}
    >
      <path d="m13 16 5-4-5-4v3H4v2h9z" />
      <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
    </svg>
  );
}
export default SvgLogIn;
