const imgShapes = "/das-mobile/assets/345a1fa019447586afb63dd4.svg";
const imgGroup1171277045 = "/das-mobile/assets/c7628e22137cec86a9b72fd9.svg";
const imgStyle1 = "/das-mobile/assets/561029b863b1f8d34ea7a622.svg";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgArtifactImage1 = "/das-mobile/assets/e9e73771410bcd5d73f656dc.png";
const imgArtifactImage2 = "/das-mobile/assets/4d347e62741550e5a1b8d15a.png";
const imgArtifactImage3 = "/das-mobile/assets/ae5da28b24a830c439e18a7b.png";
const imgArtifactImage4 = "/das-mobile/assets/416e830295c78a31ac621daa.png";
const imgArtifactImage5 = "/das-mobile/assets/e674eafeb48b2b7194d9a125.png";
const imgShape = "/das-mobile/assets/7ac018d4d1f4ed3d898ee132.svg";
const imgShape1 = "/das-mobile/assets/0e347867001f433e7bf5aea3.svg";
const imgShape2 = "/das-mobile/assets/708dc804337a7ddf228cbb20.svg";

type PaginationProps = {
  className?: string;
  position?: "Right";
  text?: string;
};

function Pagination({ className, position = "Right", text = "1/5" }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[320px]"} data-node-id="5675:20062">
      <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="5675:20063" data-name="Icon Button">
        <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5675:20063;4856:21247" data-name="Shapes">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5675:20063;4856:21250" data-name="Icon">
          <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5675:20063;4856:21251">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-1 font-['Inter:Semi_Bold'] font-semibold leading-[24px] min-w-px not-italic relative text-[#291d14] text-[16px] text-center tracking-[-0.32px]" data-node-id="5675:20064" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        {text}
      </p>
      <div className="flex items-center justify-center relative shrink-0" data-node-id="5675:20065">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5675:20065;4856:21239" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5675:20065;4856:21242" data-name="Icon">
              <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5675:20065;4856:21243">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default function List() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between pb-[16px] pt-[24px] relative size-full" data-node-id="5781:31493" data-name="List">
      <div className="content-stretch flex flex-col gap-[12px] h-[576px] items-start relative shrink-0" data-node-id="5781:31494" data-name="Row group">
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-node-id="5781:31495" data-name="Row">
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31496" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31496;4387:25767" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape} />
              </div>
            </div>
            <div className="absolute border-[#b1352a] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31496;4387:25874" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31496;4387:25875" data-name="Artifact image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
              </div>
            </div>
            <div className="absolute bg-[#b1352a] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31496;4387:25876" data-name="Tag name" />
            <TextContainer className="absolute content-stretch flex h-[36px] items-center justify-center left-[10px] px-[2px] top-[137px] w-[122px]" prop2Lines />
            <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31496;5604:46681" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#b1352a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31496;4387:25878" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31497" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31497;4387:25767" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape} />
              </div>
            </div>
            <div className="absolute border-[#b1352a] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31497;4387:25874" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31497;4387:25875" data-name="Artifact image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage1} />
              </div>
            </div>
            <div className="absolute bg-[#b1352a] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31497;4387:25876" data-name="Tag name" />
            <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[10px] px-[2px] top-[137px] w-[122px]" data-node-id="I5781:31497;4515:18775" data-name="Text container">
              <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[1.2] min-w-px not-italic relative text-[#ffedc0] text-[14px] text-center" data-node-id="I5781:31497;4515:18775;4387:25201">
                Đầu rồng
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31497;5604:46681" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#b1352a] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31497;4387:25878" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                02
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-node-id="5781:31498" data-name="Row">
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31499" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31499;4387:26103" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape1} />
              </div>
            </div>
            <div className="absolute border-[#2f5f7c] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31499;4387:26106" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31499;4387:26107" data-name="Artifact image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgArtifactImage2} />
              </div>
            </div>
            <div className="absolute bg-[#2f5f7c] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31499;4387:26108" data-name="Tag name" />
            <div className="-translate-x-1/2 absolute bottom-[11px] content-stretch flex h-[36px] items-center justify-center left-[calc(50%-1px)] w-[122px]" data-node-id="I5781:31499;4515:18728" data-name="Text container">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-none not-italic relative shrink-0 text-[#ffedc0] text-[14px] text-center whitespace-pre" data-node-id="I5781:31499;4515:18728;4387:22981">{`Gạch hoa  `}</p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31499;5604:46680" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#2f5f7c] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31499;4387:26110" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                03
              </p>
            </div>
          </div>
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31500" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31500;4387:26103" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape1} />
              </div>
            </div>
            <div className="absolute border-[#2f5f7c] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31500;4387:26106" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31500;4387:26107" data-name="Artifact image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgArtifactImage3} />
              </div>
            </div>
            <div className="absolute bg-[#2f5f7c] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31500;4387:26108" data-name="Tag name" />
            <div className="-translate-x-1/2 absolute bottom-[11px] content-stretch flex h-[36px] items-center justify-center left-[calc(50%-1px)] px-[2px] w-[122px]" data-node-id="I5781:31500;4515:18728" data-name="Text container">
              <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[1.2] min-w-px not-italic relative text-[#ffedc0] text-[14px] text-center" data-node-id="I5781:31500;4515:18728;4387:25201">
                Mảnh lá đề
              </p>
            </div>
            <div className="absolute content-stretch flex flex-col h-[24px] items-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31500;5604:46680" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#2f5f7c] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31500;4387:26110" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                04
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-node-id="5781:31501" data-name="Row">
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31502" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31502;4387:26218" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape2} />
              </div>
            </div>
            <div className="absolute border-[#686f2e] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31502;4387:26221" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31502;4387:26222" data-name="Artifact image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[82.79%] left-[0.62%] max-w-none top-[8.55%] w-[98.76%]" src={imgArtifactImage4} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#686f2e] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31502;4387:26223" data-name="Tag name" />
            <div className="-translate-x-1/2 absolute bottom-[11px] content-stretch flex h-[36px] items-center justify-center left-[calc(50%-1px)] w-[122px]" data-node-id="I5781:31502;4515:18556" data-name="Text container">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-none not-italic relative shrink-0 text-[#ffedc0] text-[14px] text-center whitespace-nowrap" data-node-id="I5781:31502;4515:18556;4387:22981">
                Tượng vịt
              </p>
            </div>
            <div className="absolute content-stretch flex h-[24px] items-start justify-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31502;5604:46679" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#686f2e] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31502;4387:26225" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                05
              </p>
            </div>
          </div>
          <div className="h-[183.998px] relative shrink-0 w-[144px]" data-node-id="5781:31503" data-name="Stamp">
            <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5781:31503;4387:26218" data-name="Shape">
              <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                <img alt="" className="block max-w-none size-full" src={imgShape2} />
              </div>
            </div>
            <div className="absolute border-[#686f2e] border-[1.4px] border-solid content-stretch flex flex-col inset-[4.88%_8.33%_5.99%_6.94%] items-center overflow-clip p-[8px]" data-node-id="I5781:31503;4387:26221" data-name="Frame border">
              <div className="relative shrink-0 size-[120px]" data-node-id="I5781:31503;4387:26222" data-name="Artifact image">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgArtifactImage5} />
              </div>
            </div>
            <div className="absolute bg-[#686f2e] inset-[72.28%_8.33%_5.98%_6.94%]" data-node-id="I5781:31503;4387:26223" data-name="Tag name" />
            <div className="-translate-x-1/2 absolute bottom-[11px] content-stretch flex h-[36px] items-center justify-center left-[calc(50%-1px)] px-[2px] w-[122px]" data-node-id="I5781:31503;4515:18556" data-name="Text container">
              <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[1.2] min-w-px not-italic relative text-[#ffedc0] text-[14px] text-center" data-node-id="I5781:31503;4515:18556;4387:25201">
                Tượng uyên ương
              </p>
            </div>
            <div className="absolute content-stretch flex h-[24px] items-start justify-end p-[8px] right-[11px] top-[8px] w-[40px]" data-node-id="I5781:31503;5604:46679" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#686f2e] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5781:31503;4387:26225" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                06
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pagination className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]" />
    </div>
  );
}
