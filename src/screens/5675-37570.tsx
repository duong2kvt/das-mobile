const imgStyle1 = "/das-mobile/assets/561029b863b1f8d34ea7a622.svg";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgShape = "/das-mobile/assets/c208f7ac51557b41f58c8624.svg";
const imgShape1 = "/das-mobile/assets/1eadbb9ca6df794790d6572d.svg";
const imgLock = "/das-mobile/assets/390ee3503fa352db42c9c021.svg";

type TextContainerProps = {
  className?: string;
  prop2Lines?: boolean;
};

function TextContainer({ className, prop2Lines = false }: TextContainerProps) {
  const isProp2Lines = prop2Lines;
  return (
    <div className={className || `content-stretch flex h-[36px] items-center justify-center relative w-[122px] ${isProp2Lines ? "px-[2px]" : ""}`} id={isProp2Lines ? "node-4387_25332" : "node-4387_25333"}>
      <p className={`[word-break:break-word] font-["Young_Display_Bold:Bold"] not-italic relative text-[#ffedc0] text-[14px] text-center ${isProp2Lines ? "flex-1 leading-[1.2] min-w-px" : "leading-none shrink-0 whitespace-nowrap"}`} id={isProp2Lines ? "node-4387_25201" : "node-4387_22981"}>
        {isProp2Lines ? "Đầu chim phượng " : "Đầu rồng"}
      </p>
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

type StampProps = {
  className?: string;
  style?: "Red" | "Locked";
};

function Stamp({ className, style = "Red" }: StampProps) {
  const isLocked = style === "Locked";
  const isRed = style === "Red";
  return (
    <div className={className || "h-[183.998px] relative w-[144px]"} id={isLocked ? "node-4537_23924" : "node-4387_26333"}>
      <div className="absolute inset-[0_1.21%_1.1%_0]" id={isLocked ? "node-4530_20843" : "node-4387_25767"} data-name="Shape">
        <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
          <img alt="" className="block max-w-none size-full" src={isLocked ? imgShape1 : imgShape} />
        </div>
      </div>
      <div className={`absolute border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px] ${isLocked ? "border-[#8e816d]" : "border-[#b1352a]"}`} id={isLocked ? "node-4530_20846" : "node-4387_25874"} data-name="Frame border">
        {isRed && (
          <div className="relative shrink-0 size-[120px]" data-node-id="4387:25875" data-name="Artifact image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
          </div>
        )}
        {isLocked && (
          <div className="-translate-x-1/2 absolute left-1/2 size-[78px] top-[29.32px]" data-node-id="4530:20956" data-name="Lock">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLock} />
          </div>
        )}
      </div>
      <div className={`absolute inset-[72.28%_8.33%_5.98%_6.94%] ${isLocked ? "bg-[#8e816d]" : "bg-[#b1352a]"}`} id={isLocked ? "node-4530_20848" : "node-4387_25876"} data-name="Tag name" />
      <TextContainer className={`absolute content-stretch flex h-[36px] items-center justify-center left-[10px] top-[137px] w-[122px] ${isLocked ? "" : "px-[2px]"}`} prop2Lines={isRed ? true : undefined} />
      <div className={`absolute content-stretch flex h-[24px] p-[8px] right-[11px] top-[8px] w-[40px] ${isLocked ? "items-start justify-end" : "flex-col items-end"}`} id={isLocked ? "node-5604_56512" : "node-5604_46681"} data-name="Text containner">
        <p className={`[word-break:break-word] font-["Young_Display_Bold:Bold"] leading-[normal] not-italic relative shrink-0 text-[14px] tracking-[-0.28px] whitespace-nowrap ${isLocked ? "text-[#8e816d]" : "text-[#b1352a]"}`} id={isLocked ? "node-4530_20850" : "node-4387_25878"} style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
          {isLocked ? "???" : "15"}
        </p>
      </div>
    </div>
  );
}

export default function Row() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative size-full" data-node-id="5675:37570" data-name="Row">
      <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5675:37571" data-name="Stamp">
        <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5675:37571;4387:25767" data-name="Shape">
          <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
            <img alt="" className="block max-w-none size-full" src={imgShape} />
          </div>
        </div>
        <div className="absolute border-[#b1352a] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5675:37571;4387:25874" data-name="Frame border">
          <div className="relative shrink-0 size-[120px]" data-node-id="I5675:37571;4387:25875" data-name="Artifact image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
          </div>
        </div>
        <div className="absolute bg-[#b1352a] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5675:37571;4387:25876" data-name="Tag name" />
        <TextContainer className="absolute content-stretch flex h-[36px] items-center justify-center left-[10px] px-[2px] top-[137px] w-[122px]" prop2Lines />
        <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5675:37571;5604:46681" data-name="Text containner">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#b1352a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5675:37571;4387:25878" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            01
          </p>
        </div>
      </div>
      <Stamp className="h-[183.998px] relative shrink-0 w-[144px]" style="Locked" />
    </div>
  );
}
