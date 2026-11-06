const imgStateDefault = "/das-mobile/assets/28f47578cc0e31dc2d22e12c.png";
const imgShapes = "/das-mobile/assets/8d357ac9120c494b95fd7002.svg";
const imgGroup1171277045 = "/das-mobile/assets/55f9d4f9ad76716065c260d0.svg";
const imgSneaky1 = "/das-mobile/assets/e1b7008ef16d7d081c61ede3.png";
const imgUnion = "/das-mobile/assets/0339fefcbac57384524e2d78.png";
const imgMascot72 = "/das-mobile/assets/da6cfecd44b0ab815a6e06cf.png";
const imgVector1171 = "/das-mobile/assets/e28deadb260dad26271ce98b.svg";
const imgVector1170 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1172 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1173 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1174 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";

type ScanningProps = {
  className?: string;
  state?: "Default";
};

function Scanning({ className, state = "Default" }: ScanningProps) {
  return (
    <div className={className || "h-[528px] overflow-clip relative rounded-[var(--corner-radius\\/xlarge,32px)] w-[392px]"} data-node-id="5431:82925">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[var(--corner-radius\/xlarge,32px)]">
        <img alt="" className="absolute h-[121.24%] left-[-61.43%] max-w-none top-[-3.17%] w-[242.04%]" src={imgStateDefault} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-[#f3cb2e] from-[32.147%] h-[109px] left-1/2 opacity-40 to-[99.702%] to-[rgba(243,203,46,0)] top-[calc(50%-278.5px)] w-[392px]" data-node-id="5431:82922" data-name="Shape" />
    </div>
  );
}

type IconButtonProps = {
  className?: string;
  light?: "False";
  type?: "Left";
};

function IconButton({ className, light = "False", type = "Left" }: IconButtonProps) {
  return (
    <div className={className || "h-[40px] relative w-[76px]"} data-node-id="4856:22055">
      <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="4848:62450" data-name="Shapes">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="4848:62453" data-name="Icon">
        <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="4848:62454">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
        </div>
      </div>
    </div>
  );
}

export default function Scanning2nd() {
  return (
    <a className="bg-[#dcd0c6] content-stretch cursor-pointer flex flex-col items-center justify-center relative size-full" data-node-id="5431:82930" data-name="Scanning 2nd">
      <div className="absolute flex h-[144.788px] items-center justify-center left-[238px] top-[46px] w-[166.974px]" data-node-id="5431:82931">
        <div className="flex-none rotate-[20.7deg]">
          <div className="h-[101.872px] opacity-0 relative w-[140px]" data-name="Sneaky 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[137.43%] left-0 max-w-none top-0 w-full" src={imgSneaky1} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[64px] px-[24px] relative shrink-0 w-full" data-node-id="5431:82932" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5431:82933" data-name="Navigation">
          <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="I5431:82933;5425:24788" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="I5431:82933;5425:24789" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Scan cổ vật
            </p>
          </div>
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-1 flex-col gap-[40px] items-center min-h-px px-[24px] relative w-full" data-node-id="5431:82934" data-name="Body">
        <Scanning className="h-[528px] overflow-clip relative rounded-[var(--corner-radius\/xlarge,32px)] shrink-0 w-[392px]" />
        <div className="content-stretch flex flex-col gap-[8px] h-[114px] items-start py-px relative shrink-0 w-[350px]" data-node-id="5431:82942" data-name="Mascot Guide">
          <div className="absolute contents left-0 top-[-0.45px]" data-node-id="5431:82943" data-name="tag">
            <div className="absolute flex h-[116.962px] items-center justify-center left-0 top-[-0.45px] w-[333.5px]" data-node-id="5431:82944">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[116.962px] relative w-[333.5px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1171} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[9.332px] items-center justify-center left-[291.24px] top-[154.22px] w-[20.56px]" data-node-id="5431:82945">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[9.332px] relative w-[20.56px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1170} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[23.262px] items-center justify-center left-[265.37px] top-[136.55px] w-[9.563px]" data-node-id="5431:82946">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[23.262px] relative w-[9.563px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1172} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[3.733px] items-center justify-center left-[274.93px] top-[159.82px] w-[36.764px]" data-node-id="5431:82947">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[3.733px] relative w-[36.764px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1173} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[15.492px] items-center justify-center left-[286.64px] top-[138.73px] w-[4.597px]" data-node-id="5431:82948">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[15.492px] relative w-[4.597px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1174} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[108.063px] items-center justify-center left-0 top-[0.49px] w-[348px]" data-node-id="5431:82949">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[108.063px] relative w-[348px]" data-name="Union">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="108.063" src={imgUnion} width="348" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] h-[108px] items-center justify-center pl-[20px] pr-[16px] relative shrink-0 w-full" data-node-id="5431:82952" data-name="Text">
            <div className="[word-break:break-word] content-stretch flex flex-1 flex-col gap-[8px] italic items-start justify-center leading-[1.4] min-w-px relative text-[16px] text-left tracking-[-0.32px]" data-node-id="5431:82953">
              <p className="font-['Inter:Bold_Italic'] font-bold relative shrink-0 text-[#291d14] whitespace-nowrap" data-node-id="5431:82954" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Ồ, góc chụp đẹp đấy!
              </p>
              <p className="font-['Inter:Medium_Italic'] font-medium min-w-full relative shrink-0 text-[#664932] w-[min-content]" data-node-id="5431:82955" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Đang scan và phân tích cổ vật… Chờ ta chút xíu!
              </p>
            </div>
            <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[363.636px] shrink-0 size-[80px]" data-node-id="5431:82956" data-name="Avatar">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-[calc(50%+1px)] rounded-[200px] size-[80px] top-1/2" data-node-id="5431:82957" data-name="BG" />
              <div className="relative rounded-[200px] shrink-0 size-[68px]" data-node-id="5431:82958" data-name="mascot 7 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
                  <img alt="" className="absolute left-[-3%] max-w-none size-full top-0" src={imgMascot72} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
