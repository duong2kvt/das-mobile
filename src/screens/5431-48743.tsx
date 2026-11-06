const imgShapes = "/das-mobile/assets/c8d01729da2b9470f4789008.svg";
const imgGroup1171277045 = "/das-mobile/assets/c6c44d3223108f63abdd560e.svg";
const imgRibbo = "/das-mobile/assets/46e560f49cf50027919b8658.svg";
const imgImage = "/das-mobile/assets/1e3b1629ed36eb95f7e8639e.png";
const imgImage1 = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgMascot13 = "/das-mobile/assets/6c9a059f6231b5fcd4eebd21.png";
const imgUnion = "/das-mobile/assets/f095c5fd2e0f353790721405.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgVector1186 = "/das-mobile/assets/7db4c06ebb890cbb8938b382.svg";
const imgVector1171 = "/das-mobile/assets/e2f38c7fe676e8a1580a50a5.svg";
const imgIconInteract = "/das-mobile/assets/4af3c153baffa5ba2bade48e.svg";
const imgRectangle4 = "/das-mobile/assets/ee230365accdd418fa14d003.svg";
const imgLight = "/das-mobile/assets/e2d2793fb7ce7cffff077dd9.svg";
const imgNote = "/das-mobile/assets/f58c3870a710e1dd77d5bd61.svg";
const imgShapes1 = "/das-mobile/assets/60dd1722dde867cdd6830646.svg";

type IconButtonProps = {
  className?: string;
  light?: "True";
  type?: "Right";
};

function IconButton({ className, light = "True", type = "Right" }: IconButtonProps) {
  return (
    <div className={className || "h-[40px] relative w-[76px]"} data-node-id="4856:22054">
      <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="4856:21239" data-name="Shapes">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="4856:21242" data-name="Icon">
        <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="4856:21243">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
        </div>
      </div>
    </div>
  );
}

type RibbonProps = {
  className?: string;
  size?: "S";
  type?: "Accent";
};

function Ribbon({ className, size = "S", type = "Accent" }: RibbonProps) {
  return (
    <div className={className || "h-[42px] relative w-[182px]"} data-node-id="5239:46975">
      <div className="absolute h-[42px] left-0 top-0 w-[182px]" data-node-id="5239:46108" data-name="Ribbo">
        <div className="absolute inset-[-0.99%_-0.16%_0_-0.23%]">
          <img alt="" className="block max-w-none size-full" src={imgRibbo} />
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[11px] leading-[normal] left-1/2 not-italic text-[#291d14] text-[14px] text-center top-[calc(50%-10px)] tracking-[-0.28px] w-[118px]" data-node-id="5239:46165" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Đầu chim phượng `}</p>
    </div>
  );
}

type BnCoBaoGiTHiProps = {
  className?: string;
  name?: "Letter 1" | "Letter 2" | "Letter 3" | "Letter 4" | "Letter 5" | "Letter 6";
  stage?: "1";
};

function BnCoBaoGiTHi({ className, name = "Letter 1", stage = "1" }: BnCoBaoGiTHiProps) {
  const is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 = stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6"].includes(name);
  const isLetter2And1 = name === "Letter 2" && stage === "1";
  const isLetter3And1 = name === "Letter 3" && stage === "1";
  const isLetter4And1 = name === "Letter 4" && stage === "1";
  const isLetter5And1 = name === "Letter 5" && stage === "1";
  const isLetter6And1 = name === "Letter 6" && stage === "1";
  return (
    <div className={className || "h-[28px] relative w-[229px]"} id={isLetter6And1 ? "node-5431_67843" : isLetter5And1 ? "node-5431_67841" : isLetter4And1 ? "node-5431_67839" : isLetter3And1 ? "node-5431_67837" : isLetter2And1 ? "node-5431_67835" : "node-5431_67833"}>
      <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[0] left-0 not-italic opacity-0 text-[20px] text-[rgba(0,0,0,0)] top-0 whitespace-nowrap" id={isLetter6And1 ? "node-5431_67842" : isLetter5And1 ? "node-5431_67840" : isLetter4And1 ? "node-5431_67838" : isLetter3And1 ? "node-5431_67836" : isLetter2And1 ? "node-5431_67834" : "node-5431_67832"}>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 ? "" : "text-[#3c2b1e]"}`}>{isLetter6And1 ? "Bạn có bao giờ tự " : isLetter5And1 ? "Bạn có bao giờ " : isLetter4And1 ? "Bạn có bao " : isLetter3And1 ? "Bạn có " : isLetter2And1 ? "Bạn " : "Bạn "}</span>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 ? "text-[#3c2b1e]" : ""}`}>{isLetter6And1 ? "hỏi..." : isLetter5And1 ? "tự " : isLetter4And1 ? "giờ " : isLetter3And1 ? "bao " : isLetter2And1 ? "có " : "có bao giờ tự hỏi..."}</span>
        {stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5"].includes(name) && <span className="leading-[1.4]">{isLetter5And1 ? "hỏi..." : isLetter4And1 ? "tự hỏi..." : isLetter3And1 ? "giờ tự hỏi..." : isLetter2And1 ? "bao giờ tự hỏi..." : ""}</span>}
      </p>
    </div>
  );
}

export default function Scene2() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5431:48743" data-name="Scene 2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48744" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[103.3%] left-[-3.82%] max-w-none top-0 w-[107.64%]" src={imgImage} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-112.95%] max-w-none top-0 w-[325.91%]" src={imgImage1} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[40px] h-[419px] left-[calc(50%+0.5px)] w-[371px]" data-node-id="5431:64546" data-name="Mascot Guide">
        <div className="absolute flex h-[345.648px] items-center justify-center left-[-49px] top-0 w-[352.254px]" data-node-id="5431:64547">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[345.648px] relative w-[352.254px]" data-name="mascot 1 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[112.61%] left-[5.74%] max-w-none top-[-12.44%] w-[110.5%]" src={imgMascot13} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="5431:64548">
          <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="5431:64549" data-name="Name tag">
            <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="5431:64550">
              <div className="flex-none rotate-[-1.28deg]">
                <div className="h-[43.191px] relative w-[158.121px]">
                  <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="5431:64551">
              <div className="flex-none rotate-[-0.98deg]">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="5431:64552" data-name="Box chat">
            <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="5431:64553">
              <div className="absolute inset-[-0.69%_-0.28%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1171} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="5431:64554" data-name="Content">
              <div className="absolute h-[153.288px] left-0 top-0 w-[370.829px]" data-node-id="5431:64555" data-name="Union">
                <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                  <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
                </div>
              </div>
              <div className="content-stretch flex h-[107.532px] items-start p-[8px] relative shrink-0 w-[336.781px]" data-node-id="5431:64557" data-name="Text">
                <div className="bg-[rgba(255,255,255,0)] h-[28px] relative shrink-0 w-[229px]" data-node-id="5431:67863" data-name="Bạn có bao giờ tự hỏi... - Animation ▶">
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" />
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" name="Letter 2" />
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" name="Letter 3" />
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" name="Letter 4" />
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" name="Letter 5" />
                  <BnCoBaoGiTHi className="absolute h-[28px] left-0 top-0 w-[229px]" name="Letter 6" />
                </div>
              </div>
              <div className="absolute h-[19px] left-[333px] top-[128px] w-[18px]" data-node-id="5431:64559" data-name="Icon Interact">
                <div className="absolute inset-[-2.63%_-5.56%_0_-2.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgIconInteract} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[623px] left-1/2 opacity-0 top-[-150px] w-[328px]" data-node-id="5431:71449" data-name="Graphic asset">
        <div className="-translate-x-1/2 absolute bottom-0 left-1/2 mix-blend-plus-lighter top-0 w-[328px]" data-node-id="5431:71450">
          <div className="absolute inset-[-12.04%_-22.87%]">
            <img alt="" className="block max-w-none size-full" src={imgRectangle4} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[225px] left-1/2 top-[calc(50%+159px)] w-[208px]" data-node-id="5431:71451" data-name="Artifact">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[400px] top-[calc(50%-0.5px)]" data-node-id="5431:71452" data-name="Light effect">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-plus-lighter size-[400px] top-1/2" data-node-id="I5431:71452;5410:24709" data-name="Líght">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLight} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.07px)] top-[calc(50%-0.15px)]" data-node-id="5431:71453" data-name="Sheet">
            <div className="absolute h-[224.7px] left-px top-0 w-[206.132px]" data-node-id="5431:71454" data-name="note">
              <div className="absolute inset-[-0.45%_-1.94%_-1.78%_-0.49%]">
                <img alt="" className="block max-w-none size-full" src={imgNote} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute aspect-[420/420] bottom-[26.22%] left-1/2 top-[7.11%]" data-node-id="5431:71458" data-name="Artifact image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
            </div>
            <Ribbon className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+1px)] top-[174px] w-[182px]" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5604:19220" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5604:19221" data-name="Navigation">
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center opacity-0 relative shrink-0" data-node-id="5604:19223" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5604:19224" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="5604:19225">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
                <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5604:19226" data-name="Shapes">
                  <div className="absolute inset-[-1.25%_-2.63%_-5%_-0.66%]">
                    <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute flex h-[11px] items-center justify-center left-1/2 top-[calc(50%-5px)] w-[54px]" data-node-id="5604:19229">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[11px] leading-[normal] not-italic relative text-[#291d14] text-[14px] text-center tracking-[-0.28px] w-[54px]" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      Bỏ qua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
