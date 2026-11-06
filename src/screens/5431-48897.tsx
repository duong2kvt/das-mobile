const imgLight = "/das-mobile/assets/c674a7da10d2a4a5f2a9bde7.svg";

type LightEffectProps = {
  className?: string;
  state?: "Defualt";
};

function LightEffect({ className, state = "Defualt" }: LightEffectProps) {
  return (
    <div className={className || "relative size-[480px]"} data-node-id="5410:24727">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-screen size-[480px] top-1/2" data-node-id="5410:24709" data-name="Líght">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLight} />
      </div>
    </div>
  );
}

export default function RewardScreen() {
  return (
    <div className="relative size-full" data-node-id="5431:48897" data-name="Reward screen">
      <LightEffect className="-translate-x-1/2 absolute left-1/2 opacity-0 size-[480px] top-[210px]" />
    </div>
  );
}
