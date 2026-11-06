const imgShapes = "/das-mobile/assets/4097e823ab39343f77710663.svg";
const imgGroup1171277045 = "/das-mobile/assets/b56cee7c1fe659c49f36ea90.svg";
const imgRibbo = "/das-mobile/assets/69c7245e052d161127599c99.svg";
const imgImage = "/das-mobile/assets/1e3b1629ed36eb95f7e8639e.png";
const imgImage1 = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgFrame2147235289 = "/das-mobile/assets/825bd1b50074830a08ad36dc.png";
const imgUnion = "/das-mobile/assets/f095c5fd2e0f353790721405.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgVector1186 = "/das-mobile/assets/896493232547b25e11c5d970.svg";
const imgVector1171 = "/das-mobile/assets/a42402706b9f368d952f0679.svg";
const imgIcon = "/das-mobile/assets/3357942c88f42af84c4e4557.svg";
const imgRectangle4 = "/das-mobile/assets/2c5c2f2a5c7b6ad5ea457c95.svg";
const imgLight = "/das-mobile/assets/fa15b4ba5ba476b9d32d2591.svg";
const imgNote = "/das-mobile/assets/8898d9081d9b1675d384fa9b.svg";
const imgShapes1 = "/das-mobile/assets/b4f89fcb8a96b16919263427.svg";

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

type VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChungProps = {
  className?: string;
  name?: "Letter 1" | "Letter 2" | "Letter 3" | "Letter 4" | "Letter 5" | "Letter 6" | "Letter 7" | "Letter 8" | "Letter 9" | "Letter 10" | "Letter 11" | "Letter 12" | "Letter 13" | "Letter 14" | "Letter 15" | "Letter 16" | "Letter 17" | "Letter 18" | "Letter 19" | "Letter 20" | "Letter 21" | "Letter 22";
  stage?: "1";
};

function VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung({ className, name = "Letter 1", stage = "1" }: VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChungProps) {
  const is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or = stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6", "Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11", "Letter 12", "Letter 13", "Letter 14", "Letter 15", "Letter 16", "Letter 17", "Letter 18", "Letter 19", "Letter 20", "Letter 21", "Letter 22"].includes(name);
  const isLetter10And1 = name === "Letter 10" && stage === "1";
  const isLetter11And1 = name === "Letter 11" && stage === "1";
  const isLetter12And1 = name === "Letter 12" && stage === "1";
  const isLetter13And1 = name === "Letter 13" && stage === "1";
  const isLetter14And1 = name === "Letter 14" && stage === "1";
  const isLetter15And1 = name === "Letter 15" && stage === "1";
  const isLetter16And1 = name === "Letter 16" && stage === "1";
  const isLetter17And1 = name === "Letter 17" && stage === "1";
  const isLetter18And1 = name === "Letter 18" && stage === "1";
  const isLetter19And1 = name === "Letter 19" && stage === "1";
  const isLetter20And1 = name === "Letter 20" && stage === "1";
  const isLetter21And1 = name === "Letter 21" && stage === "1";
  const isLetter22And1 = name === "Letter 22" && stage === "1";
  const isLetter2And1 = name === "Letter 2" && stage === "1";
  const isLetter3And1 = name === "Letter 3" && stage === "1";
  const isLetter4And1 = name === "Letter 4" && stage === "1";
  const isLetter5And1 = name === "Letter 5" && stage === "1";
  const isLetter6And1 = name === "Letter 6" && stage === "1";
  const isLetter7And1 = name === "Letter 7" && stage === "1";
  const isLetter8And1 = name === "Letter 8" && stage === "1";
  const isLetter9And1 = name === "Letter 9" && stage === "1";
  return (
    <div className={className || "h-[112px] relative w-[308.781px]"} id={isLetter22And1 ? "node-5431_71833" : isLetter21And1 ? "node-5431_71831" : isLetter20And1 ? "node-5431_71829" : isLetter19And1 ? "node-5431_71827" : isLetter18And1 ? "node-5431_71825" : isLetter17And1 ? "node-5431_71823" : isLetter16And1 ? "node-5431_71821" : isLetter15And1 ? "node-5431_71819" : isLetter14And1 ? "node-5431_71817" : isLetter13And1 ? "node-5431_71815" : isLetter12And1 ? "node-5431_71813" : isLetter11And1 ? "node-5431_71811" : isLetter10And1 ? "node-5431_71809" : isLetter9And1 ? "node-5431_71807" : isLetter8And1 ? "node-5431_71805" : isLetter7And1 ? "node-5431_71803" : isLetter6And1 ? "node-5431_71801" : isLetter5And1 ? "node-5431_71799" : isLetter4And1 ? "node-5431_71797" : isLetter3And1 ? "node-5431_71795" : isLetter2And1 ? "node-5431_71793" : "node-5431_71791"}>
      <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[0] left-0 not-italic opacity-0 text-[20px] text-[rgba(0,0,0,0)] top-0 w-[308.781px]" id={isLetter22And1 ? "node-5431_71832" : isLetter21And1 ? "node-5431_71830" : isLetter20And1 ? "node-5431_71828" : isLetter19And1 ? "node-5431_71826" : isLetter18And1 ? "node-5431_71824" : isLetter17And1 ? "node-5431_71822" : isLetter16And1 ? "node-5431_71820" : isLetter15And1 ? "node-5431_71818" : isLetter14And1 ? "node-5431_71816" : isLetter13And1 ? "node-5431_71814" : isLetter12And1 ? "node-5431_71812" : isLetter11And1 ? "node-5431_71810" : isLetter10And1 ? "node-5431_71808" : isLetter9And1 ? "node-5431_71806" : isLetter8And1 ? "node-5431_71804" : isLetter7And1 ? "node-5431_71802" : isLetter6And1 ? "node-5431_71800" : isLetter5And1 ? "node-5431_71798" : isLetter4And1 ? "node-5431_71796" : isLetter3And1 ? "node-5431_71794" : isLetter2And1 ? "node-5431_71792" : "node-5431_71790"}>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or ? "" : "text-[#3c2b1e]"}`}>{isLetter22And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá " : isLetter21And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám " : isLetter20And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình " : isLetter19And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng " : isLetter18And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người " : isLetter17And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm " : isLetter16And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang " : isLetter15And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi " : isLetter14And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý tới. " : isLetter13And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú ý " : isLetter12And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng chú " : isLetter11And1 ? "Vẫn còn rất nhiều cổ vật mà ít người từng " : isLetter10And1 ? "Vẫn còn rất nhiều cổ vật mà ít người " : isLetter9And1 ? "Vẫn còn rất nhiều cổ vật mà ít " : isLetter8And1 ? "Vẫn còn rất nhiều cổ vật mà " : isLetter7And1 ? "Vẫn còn rất nhiều cổ vật " : isLetter6And1 ? "Vẫn còn rất nhiều cổ " : isLetter5And1 ? "Vẫn còn rất nhiều " : isLetter4And1 ? "Vẫn còn rất " : isLetter3And1 ? "Vẫn còn " : isLetter2And1 ? "Vẫn " : "Vẫn "}</span>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or ? "text-[#3c2b1e]" : ""}`}>{isLetter22And1 ? "chúng." : isLetter21And1 ? "phá " : isLetter20And1 ? "khám " : isLetter19And1 ? "mình " : isLetter18And1 ? "cùng " : isLetter16And1 ? "tìm " : isLetter15And1 ? "đang " : isLetter14And1 ? "Tôi " : isLetter13And1 ? "tới. " : isLetter12And1 ? "ý " : isLetter11And1 ? "chú " : isLetter10And1 ? "từng " : stage === "1" && ["Letter 9", "Letter 17"].includes(name) ? "người " : isLetter8And1 ? "ít " : isLetter7And1 ? "mà " : isLetter6And1 ? "vật " : isLetter5And1 ? "cổ " : isLetter4And1 ? "nhiều " : isLetter3And1 ? "rất " : isLetter2And1 ? "còn " : "còn rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng."}</span>
        {stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6", "Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11", "Letter 12", "Letter 13", "Letter 14", "Letter 15", "Letter 16", "Letter 17", "Letter 18", "Letter 19", "Letter 20", "Letter 21"].includes(name) && <span className="leading-[1.4]">{isLetter21And1 ? "chúng." : isLetter20And1 ? "phá chúng." : isLetter19And1 ? "khám phá chúng." : isLetter18And1 ? "mình khám phá chúng." : isLetter17And1 ? "cùng mình khám phá chúng." : isLetter16And1 ? "người cùng mình khám phá chúng." : isLetter15And1 ? "tìm người cùng mình khám phá chúng." : isLetter14And1 ? "đang tìm người cùng mình khám phá chúng." : isLetter13And1 ? "Tôi đang tìm người cùng mình khám phá chúng." : isLetter12And1 ? "tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter11And1 ? "ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter10And1 ? "chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter9And1 ? "từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter8And1 ? "người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter7And1 ? "ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter6And1 ? "mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter5And1 ? "vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter4And1 ? "cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter3And1 ? "nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : isLetter2And1 ? "rất nhiều cổ vật mà ít người từng chú ý tới. Tôi đang tìm người cùng mình khám phá chúng." : ""}</span>}
      </p>
    </div>
  );
}

export default function Scene4() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5431:48766" data-name="Scene 4">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48767" data-name="Image">
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
      <div className="-translate-x-1/2 absolute bottom-[40px] h-[419px] left-[calc(50%+0.5px)] w-[371px]" data-node-id="5431:48768" data-name="Mascot Guide">
        <div className="absolute h-[345.648px] left-[-49px] top-0 w-[352.254px]" data-node-id="5431:71952">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame2147235289} />
        </div>
        <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="5431:48770">
          <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="5431:48771" data-name="Name tag">
            <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="5431:48772">
              <div className="flex-none rotate-[-1.28deg]">
                <div className="h-[43.191px] relative w-[158.121px]">
                  <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="5431:48773">
              <div className="flex-none rotate-[-0.98deg]">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="5431:48774" data-name="Box chat">
            <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="5431:48775">
              <div className="absolute inset-[-0.69%_-0.28%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1171} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="5431:48776" data-name="Content">
              <div className="absolute h-[153.288px] left-0 top-0 w-[370.829px]" data-node-id="5431:48777" data-name="Union">
                <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                  <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
                </div>
              </div>
              <div className="content-stretch flex h-[107.532px] items-start px-[14px] py-[8px] relative shrink-0 w-[336.781px]" data-node-id="5431:48779" data-name="Text">
                <div className="bg-[rgba(255,255,255,0)] h-[168px] relative shrink-0 w-[200.781px]" data-node-id="5431:71901" data-name="Vẫn còn rất nhiều cổ vật mà ít... - Animation ▶">
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 2" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 3" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 4" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 5" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 6" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 7" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 8" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 9" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 10" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 11" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 12" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 13" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 14" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 15" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 16" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 17" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 18" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 19" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 20" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 21" />
                  <VnConRtNhiuCVtMaItNgiTngChuYTiToiDangTimNgiCungMinhKhamPhaChung className="absolute h-[112px] left-0 top-0 w-[308.781px]" name="Letter 22" />
                </div>
              </div>
              <div className="absolute h-[12px] left-[334px] top-[131px] w-[16px]" data-node-id="5431:48781" data-name="icon">
                <div className="absolute inset-[-4.17%_-6.25%_-8.33%_-3.13%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[623px] left-1/2 top-[-150px] w-[328px]" data-node-id="5431:48782" data-name="Graphic asset">
        <div className="-translate-x-1/2 absolute bottom-0 left-1/2 mix-blend-plus-lighter top-0 w-[328px]" data-node-id="5431:48783">
          <div className="absolute inset-[-12.04%_-22.87%]">
            <img alt="" className="block max-w-none size-full" src={imgRectangle4} />
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[225px] left-1/2 top-[calc(50%+159px)] w-[208px]" data-node-id="5431:48784" data-name="Artifact">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[400px] top-[calc(50%-0.5px)]" data-node-id="5431:48785" data-name="Light effect">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-plus-lighter size-[400px] top-1/2" data-node-id="I5431:48785;5410:24709" data-name="Líght">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLight} />
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.07px)] top-[calc(50%-0.15px)]" data-node-id="5431:48786" data-name="Sheet">
            <div className="absolute h-[224.7px] left-px top-0 w-[206.132px]" data-node-id="5431:48787" data-name="note">
              <div className="absolute inset-[-0.45%_-1.94%_-1.78%_-0.49%]">
                <img alt="" className="block max-w-none size-full" src={imgNote} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute aspect-[420/420] bottom-[26.22%] left-1/2 top-[7.11%]" data-node-id="5431:48791" data-name="Artifact image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
            </div>
            <Ribbon className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+1px)] top-[174px] w-[182px]" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5604:19284" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5604:19285" data-name="Navigation">
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center opacity-0 relative shrink-0" data-node-id="5604:19287" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5604:19288" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="5604:19289">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
                <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5604:19290" data-name="Shapes">
                  <div className="absolute inset-[-1.25%_-2.63%_-5%_-0.66%]">
                    <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute flex h-[11px] items-center justify-center left-1/2 top-[calc(50%-5px)] w-[54px]" data-node-id="5604:19293">
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
