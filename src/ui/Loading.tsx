import { BeatLoader } from "react-spinners";

function Loading({ size = 15 }: { size?: number }) {
  return (
    <BeatLoader
      color="var(--color-primary-900"
      size={size}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loading;
