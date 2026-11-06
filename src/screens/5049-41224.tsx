const imgUnion = "/das-mobile/assets/c6bd748c87cc4d1ca917ece6.svg";

type ButtonProps = {
  className?: string; label?: string;
  highEmphasis?: "False";
  state?: "Default";
  type?: "Neutral";
  witchIcon?: "False";
};

function Button({ className, label = "Thông tin", highEmphasis = "False", state = "Default", type = "Neutral", witchIcon = "False" }: ButtonProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[8px] relative w-[150px]"} data-node-id="5049:41224">
      <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="5049:41225" data-name="Union">
        <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
          <img alt="" className="block max-w-none size-full" src={imgUnion} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[86px]" data-node-id="5049:41229" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        {label}
      </p>
    </div>
  );
}
export default Button;
