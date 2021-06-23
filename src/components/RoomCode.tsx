import copyImg from "../assets/images/copy.svg";
type RoomCodeProps = {
  code: string;
};

export const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <button
      className="h-10 rounded-lg overflow-hidden bg-white border border-purple-500 flex"
      onClick={copyRoomCodeToClipboard}
    >
      <div className="bg-purple-500 py-0 px-3 flex justify-center items-center">
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span
        className="block self-center flex-1 pt-0 pr-4 pb-0 pl-3 w-60 text-sm font-medium"
      >
        Room #{props.code}
      </span>
    </button>
  );
};
