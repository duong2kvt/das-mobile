const imgGroup1171277078 = "/das-mobile/assets/ee8062d3152241f31cf312dc.svg";

type PointerUpProps = {
  className?: string;
  state?: "Default";
};

function PointerUp({ className, state = "Default" }: PointerUpProps) {
  return (
    <div className={className || "h-[112px] overflow-clip relative w-[80px]"} data-node-id="6160:29098">
      <div className="-translate-y-1/2 absolute drop-shadow-[4px_4px_0px_#4f3927] left-0 overflow-clip size-[80px] top-[calc(50%+18px)]" data-node-id="6160:29090" data-name="Icon/Point">
        <div className="absolute inset-[8.33%_14.47%]" data-node-id="I6160:29090;5765:62751">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277078} />
        </div>
      </div>
    </div>
  );
}

export default function PointerUp1() {
  return <PointerUp className="relative size-full" />;
}
