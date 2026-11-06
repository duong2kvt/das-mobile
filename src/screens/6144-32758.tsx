const imgStyle1 = "/das-mobile/assets/561029b863b1f8d34ea7a622.svg";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgShape = "/das-mobile/assets/3ed046f8b4fce2cf48f1c5b2.svg";

type TextContainerProps = {
  className?: string;
  prop2Lines?: "True";
};

function TextContainer({ className, prop2Lines = "True" }: TextContainerProps) {
  return (
    <div className={className || "content-stretch flex h-[36px] items-center justify-center px-[2px] relative w-[122px]"} data-node-id="4387:25332">
      <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[1.2] min-w-px not-italic relative text-[#ffedc0] text-[14px] text-center" data-node-id="4387:25201">{`Đầu chim phượng `}</p>
    </div>
  );
}

type PatternProps = {
  className?: string;
  style?: "1";
};

function Pattern({ className, style = "1" }: PatternProps) {
  return (
    <div className={className || "h-[164.002px] relative w-[122px]"} data-node-id="4387:25763">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStyle1} />
    </div>
  );
}

type SelectionArtifactProps = {
  className?: string;
  state?: "Default";
};

function SelectionArtifact({ className, state = "Default" }: SelectionArtifactProps) {
  return (
    <div className={className || "border-2 border-[rgba(243,203,46,0)] border-dashed h-[208px] relative rounded-[10px] w-[168px]"} data-node-id="6144:32636">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[183.998px] left-1/2 opacity-0 top-1/2 w-[144px]" data-node-id="6144:32284" data-name="Stamp">
        <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I6144:32284;4387:25767" data-name="Shape">
          <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
            <img alt="" className="block max-w-none size-full" src={imgShape} />
          </div>
        </div>
        <div className="absolute border-[#b1352a] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I6144:32284;4387:25874" data-name="Frame border">
          <div className="relative shrink-0 size-[120px]" data-node-id="I6144:32284;4387:25875" data-name="Artifact image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
          </div>
        </div>
        <div className="absolute bg-[#b1352a] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I6144:32284;4387:25876" data-name="Tag name" />
        <TextContainer className="absolute content-stretch flex h-[36px] items-center justify-center left-[10px] px-[2px] top-[137px] w-[122px]" />
        <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I6144:32284;5604:46681" data-name="Text containner">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#b1352a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6144:32284;4387:25878" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            01
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SelectionArtifact1() {
  return <SelectionArtifact className="block border-2 border-[rgba(243,203,46,0)] border-dashed cursor-pointer relative rounded-[10px] size-full" />;
}
