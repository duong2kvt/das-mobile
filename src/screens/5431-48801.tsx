const imgShapes = "/das-mobile/assets/623b8b5a33cca7114e414c63.svg";
const imgGroup1171277045 = "/das-mobile/assets/e53bef675ed2320297312871.svg";
const imgImage = "/das-mobile/assets/1e3b1629ed36eb95f7e8639e.png";
const imgImage1 = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgMascot13 = "/das-mobile/assets/4bf6e4c5db678bcbb8ade68d.png";
const imgUnion = "/das-mobile/assets/f095c5fd2e0f353790721405.png";
const imgVector1186 = "/das-mobile/assets/b4a659f85a8a141c71ade958.svg";
const imgVector1171 = "/das-mobile/assets/11c9ee55046919a32a1bea46.svg";
const imgIconInteract = "/das-mobile/assets/47fd49d86c8333256a0a7455.svg";
const imgDictation = "/das-mobile/assets/683255cdf30942099054d1a4.svg";
const imgEmoji = "/das-mobile/assets/feb054b174ee9813b9910380.svg";
const imgRectangle = "/das-mobile/assets/d5d60db1fd346cc5611554c8.svg";
const imgRectangle1 = "/das-mobile/assets/efef749888929c84775340ca.svg";
const imgRectangle2 = "/das-mobile/assets/9463e2153f77a4420d1011c9.svg";
const imgRectangle3 = "/das-mobile/assets/db0373c51faaa32694ef4daa.svg";
const imgDeleteButton = "/das-mobile/assets/4a5b06018fba839b0d8a6543.svg";
const imgShift = "/das-mobile/assets/e64eb6781fc513ad78414151.svg";
const imgShapes1 = "/das-mobile/assets/3a8b961d89b7ebaebcd0b16f.svg";

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

type TrcKhiBtDuToiNenGiBnLaGiNhProps = {
  className?: string;
  name?: "Letter 1" | "Letter 2" | "Letter 3" | "Letter 4" | "Letter 6" | "Letter 7" | "Letter 8" | "Letter 9" | "Letter 10" | "Letter 11" | "Letter 12";
  stage?: "1";
};

function TrcKhiBtDuToiNenGiBnLaGiNh({ className, name = "Letter 1", stage = "1" }: TrcKhiBtDuToiNenGiBnLaGiNhProps) {
  const is1AndIsLetter1OrLetter2OrLetter3OrLetter4 = stage === "1" && ["Letter 1", "Letter 2", "Letter 3", "Letter 4"].includes(name);
  const is1AndIsLetter2OrLetter3OrLetter4 = stage === "1" && ["Letter 2", "Letter 3", "Letter 4"].includes(name);
  const is1AndIsLetter6OrLetter7OrLetter8OrLetter9OrLetter10OrLetter11Or = stage === "1" && ["Letter 6", "Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11", "Letter 12"].includes(name);
  const is1AndIsLetter7OrLetter8OrLetter9OrLetter10OrLetter11OrLetter12 = stage === "1" && ["Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11", "Letter 12"].includes(name);
  const isLetter10And1 = name === "Letter 10" && stage === "1";
  const isLetter11And1 = name === "Letter 11" && stage === "1";
  const isLetter12And1 = name === "Letter 12" && stage === "1";
  const isLetter2And1 = name === "Letter 2" && stage === "1";
  const isLetter3And1 = name === "Letter 3" && stage === "1";
  const isLetter4And1 = name === "Letter 4" && stage === "1";
  const isLetter6And1 = name === "Letter 6" && stage === "1";
  const isLetter7And1 = name === "Letter 7" && stage === "1";
  const isLetter8And1 = name === "Letter 8" && stage === "1";
  const isLetter9And1 = name === "Letter 9" && stage === "1";
  return (
    <div className={className || "h-[56px] relative w-[320.781px]"} id={isLetter12And1 ? "node-5431_72058" : isLetter11And1 ? "node-5431_72056" : isLetter10And1 ? "node-5431_72054" : isLetter9And1 ? "node-5431_72052" : isLetter8And1 ? "node-5431_72050" : isLetter7And1 ? "node-5431_72048" : isLetter6And1 ? "node-5431_72046" : isLetter4And1 ? "node-5431_72036" : isLetter3And1 ? "node-5431_72034" : isLetter2And1 ? "node-5431_72032" : "node-5431_72030"}>
      <div className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[0] left-0 not-italic opacity-0 text-[20px] text-[rgba(0,0,0,0)] top-0 w-[320.781px] whitespace-pre-wrap" id={isLetter12And1 ? "node-5431_72057" : isLetter11And1 ? "node-5431_72055" : isLetter10And1 ? "node-5431_72053" : isLetter9And1 ? "node-5431_72051" : isLetter8And1 ? "node-5431_72049" : isLetter7And1 ? "node-5431_72047" : isLetter6And1 ? "node-5431_72045" : isLetter4And1 ? "node-5431_72035" : isLetter3And1 ? "node-5431_72033" : isLetter2And1 ? "node-5431_72031" : "node-5431_72029"}>
        <p className={`mb-0 ${is1AndIsLetter6OrLetter7OrLetter8OrLetter9OrLetter10OrLetter11Or ? "leading-[1.4]" : ""}`}>
          {is1AndIsLetter6OrLetter7OrLetter8OrLetter9OrLetter10OrLetter11Or && "Trước khi bắt đầu... "}
          {is1AndIsLetter1OrLetter2OrLetter3OrLetter4 && (
            <>
              <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4 ? "" : "text-[#3c2b1e]"}`}>{isLetter4And1 ? "Trước khi bắt " : isLetter3And1 ? "Trước khi " : isLetter2And1 ? "Trước " : "Trước "}</span>
              <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4 ? "text-[#3c2b1e]" : ""}`}>{isLetter4And1 ? "đầu... " : isLetter3And1 ? "bắt " : isLetter2And1 ? "khi " : "khi bắt đầu... "}</span>
            </>
          )}
          {stage === "1" && ["Letter 2", "Letter 3"].includes(name) && <span className="leading-[1.4]">{isLetter3And1 ? "đầu... " : isLetter2And1 ? "bắt đầu... " : ""}</span>}
        </p>
        <p className={is1AndIsLetter1OrLetter2OrLetter3OrLetter4 ? "leading-[1.4]" : undefined}>
          {is1AndIsLetter6OrLetter7OrLetter8OrLetter9OrLetter10OrLetter11Or && (
            <>
              <span className={`leading-[1.4] ${is1AndIsLetter7OrLetter8OrLetter9OrLetter10OrLetter11OrLetter12 ? "" : "text-[#3c2b1e]"}`}>{isLetter12And1 ? "Tôi nên gọi bạn là gì " : isLetter11And1 ? "Tôi nên gọi bạn là " : isLetter10And1 ? "Tôi nên gọi bạn " : isLetter9And1 ? "Tôi nên gọi " : isLetter8And1 ? "Tôi nên " : stage === "1" && ["Letter 6", "Letter 7"].includes(name) ? "Tôi " : ""}</span>
              <span className={`leading-[1.4] ${is1AndIsLetter7OrLetter8OrLetter9OrLetter10OrLetter11OrLetter12 ? "text-[#3c2b1e]" : ""}`}>{isLetter12And1 ? "nhỉ?" : isLetter11And1 ? "gì " : isLetter10And1 ? "là " : isLetter9And1 ? "bạn " : isLetter8And1 ? "gọi " : isLetter7And1 ? "nên " : isLetter6And1 ? "nên gọi bạn là gì nhỉ?" : ""}</span>
            </>
          )}
          {stage === "1" && ["Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11"].includes(name) && <span className="leading-[1.4]">{isLetter11And1 ? "nhỉ?" : isLetter10And1 ? "gì nhỉ?" : isLetter9And1 ? "là gì nhỉ?" : isLetter8And1 ? "bạn là gì nhỉ?" : isLetter7And1 ? "gọi bạn là gì nhỉ?" : ""}</span>}
          {is1AndIsLetter1OrLetter2OrLetter3OrLetter4 && "Tôi nên gọi bạn là gì nhỉ?"}
        </p>
      </div>
    </div>
  );
}

export default function Scene6() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5431:48801" data-name="Scene 6">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48802" data-name="Image">
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
      <div className="-translate-x-1/2 absolute bottom-[40px] h-[419px] left-[calc(50%+0.5px)] w-[371px]" data-node-id="5431:72014" data-name="Mascot Guide">
        <div className="absolute flex h-[345.648px] items-center justify-center left-[-49px] top-0 w-[352.254px]" data-node-id="5431:72015">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[345.648px] relative w-[352.254px]" data-name="mascot 1 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[119.66%] left-[-4.3%] max-w-none top-[-14.28%] w-[117.42%]" src={imgMascot13} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="5431:72016">
          <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="5431:72017" data-name="Name tag">
            <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="5431:72018">
              <div className="flex-none rotate-[-1.28deg]">
                <div className="h-[43.191px] relative w-[158.121px]">
                  <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="5431:72019">
              <div className="flex-none rotate-[-0.98deg]">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="5431:72020" data-name="Box chat">
            <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="5431:72021">
              <div className="absolute inset-[-0.69%_-0.28%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1171} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="5431:72022" data-name="Content">
              <div className="absolute h-[153.288px] left-0 top-0 w-[370.829px]" data-node-id="5431:72023" data-name="Union">
                <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                  <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
                </div>
              </div>
              <div className="content-stretch flex h-[107.532px] items-start p-[8px] relative shrink-0 w-[336.781px]" data-node-id="5431:72025" data-name="Text">
                <div className="bg-[rgba(255,255,255,0)] h-[84px] relative shrink-0 w-[212.781px]" data-node-id="5431:72085" data-name="Trước khi bắt đầu...  Tôi nên ... - Animation ▶">
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 2" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 3" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 4" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 6" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 7" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 8" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 9" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 10" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 11" />
                  <TrcKhiBtDuToiNenGiBnLaGiNh className="absolute h-[56px] left-0 top-0 w-[320.781px]" name="Letter 12" />
                </div>
              </div>
              <div className="absolute h-[19px] left-[333px] top-[128px] w-[18px]" data-node-id="5431:72027" data-name="Icon Interact">
                <div className="absolute inset-[-2.63%_-5.56%_0_-2.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgIconInteract} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[63.789px] bg-[#dadada] h-[341px] left-1/2 top-[959px] w-[440px]" data-node-id="5431:72110" data-name="Keyboard">
        <div className="absolute bottom-0 h-[39.893px] left-[1.17px] right-[-1.17px]" data-node-id="I5431:72110;60:1130" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[9.28px] h-[5.867px] left-1/2 rounded-[117.333px] w-[157.227px]" data-node-id="I5431:72110;60:1130;362:15723" data-name="Home Indicator" />
        </div>
        <div className="absolute contents inset-[2.75%_0.8%_8.25%_0.8%]" data-node-id="I5431:72110;60:1131" data-name="Keys">
          <div className="absolute inset-[82.82%_8%_8.59%_88%]" data-node-id="I5431:72110;60:1132" data-name="Dictation">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDictation} />
          </div>
          <div className="absolute inset-[82.47%_86.13%_8.25%_6.67%]" data-node-id="I5431:72110;60:1141" data-name="Emoji">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmoji} />
          </div>
          <div className="absolute inset-[58.42%_0.8%_27.15%_75.73%]" data-node-id="I5431:72110;60:1148" data-name="Return">
            <div className="absolute inset-[0_0.25px_0.22px_0]" data-node-id="I5431:72110;60:1149" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.25px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:72110;60:1150">
              Go
            </p>
          </div>
          <div className="absolute inset-[58.42%_25.87%_27.15%_25.6%]" data-node-id="I5431:72110;60:1151" data-name="Space">
            <div className="absolute inset-[0_-0.45px_0.22px_0]" data-node-id="I5431:72110;60:1152" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle1} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_-0.45px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:72110;60:1153">
              space
            </p>
          </div>
          <div className="absolute inset-[58.42%_76%_27.15%_0.8%]" data-node-id="I5431:72110;60:1154" data-name="123">
            <div className="absolute inset-[0_0.08px_0.22px_0]" data-node-id="I5431:72110;60:1155" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle2} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.08px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:72110;60:1156">
              123
            </p>
          </div>
          <div className="absolute contents inset-[39.86%_0.8%_45.7%_88%]" data-node-id="I5431:72110;60:1157" data-name="Delete">
            <div className="absolute inset-[39.86%_0.8%_45.7%_88%]" data-node-id="I5431:72110;60:1158" data-name="Key Light">
              <div className="absolute inset-[0_0.28px_0.22px_0]" data-node-id="I5431:72110;60:1159" data-name="Rectangle">
                <div className="absolute inset-[0_0_-2.39%_0]">
                  <img alt="" className="block max-w-none size-full" src={imgRectangle3} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.28px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:72110;60:1160">{` `}</p>
            </div>
            <div className="absolute inset-[44.21%_3.38%_49.95%_90.58%]" data-node-id="I5431:72110;60:1161" data-name="Delete Button">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDeleteButton} />
            </div>
          </div>
          <div className="absolute contents inset-[39.86%_88%_45.7%_0.8%]" data-node-id="I5431:72110;60:1170" data-name="Shift">
            <div className="absolute inset-[39.86%_88%_45.7%_0.8%]" data-node-id="I5431:72110;60:1171" data-name="Key Light">
              <div className="absolute bg-[#fcfcfc] inset-[0_0.28px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1172" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[48.07%] not-italic right-[51.93%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1173">{` `}</p>
            </div>
            <div className="absolute inset-[44.05%_91.06%_50.29%_3.91%]" data-node-id="I5431:72110;60:1174" data-name="Shift">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShift} />
            </div>
          </div>
          <div className="absolute inset-[39.86%_15.47%_45.7%_76%]" data-node-id="I5431:72110;60:1175" data-name="M">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1176" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[21.88%] not-italic right-[19.53%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1177">
              M
            </p>
          </div>
          <div className="absolute inset-[39.86%_25.6%_45.7%_65.87%]" data-node-id="I5431:72110;60:1178" data-name="N">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1179" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1180">
              N
            </p>
          </div>
          <div className="absolute inset-[39.86%_35.73%_45.7%_55.73%]" data-node-id="I5431:72110;60:1181" data-name="B">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1182" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1183">
              B
            </p>
          </div>
          <div className="absolute inset-[39.86%_45.6%_45.7%_45.87%]" data-node-id="I5431:72110;60:1184" data-name="V">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1185" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1186">
              V
            </p>
          </div>
          <div className="absolute inset-[39.86%_55.73%_45.7%_35.73%]" data-node-id="I5431:72110;60:1187" data-name="C">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1188" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1189">
              C
            </p>
          </div>
          <div className="absolute inset-[39.86%_65.6%_45.7%_25.87%]" data-node-id="I5431:72110;60:1190" data-name="X">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1191" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1192">
              X
            </p>
          </div>
          <div className="absolute inset-[39.86%_75.73%_45.7%_15.73%]" data-node-id="I5431:72110;60:1193" data-name="Z">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1194" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1195">
              Z
            </p>
          </div>
          <div className="absolute inset-[21.31%_5.6%_64.26%_85.87%]" data-node-id="I5431:72110;60:1196" data-name="L">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1197" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1198">
              L
            </p>
          </div>
          <div className="absolute inset-[21.31%_15.73%_64.26%_75.73%]" data-node-id="I5431:72110;60:1199" data-name="K">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1200" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1201">
              K
            </p>
          </div>
          <div className="absolute inset-[21.31%_25.6%_64.26%_65.87%]" data-node-id="I5431:72110;60:1202" data-name="J">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1203" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1204">
              J
            </p>
          </div>
          <div className="absolute inset-[21.31%_35.73%_64.26%_55.73%]" data-node-id="I5431:72110;60:1205" data-name="H">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1206" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1207">
              H
            </p>
          </div>
          <div className="absolute inset-[21.31%_45.6%_64.26%_45.87%]" data-node-id="I5431:72110;60:1208" data-name="G">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1209" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1210">
              G
            </p>
          </div>
          <div className="absolute inset-[21.31%_55.73%_64.26%_35.73%]" data-node-id="I5431:72110;60:1211" data-name="F">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1212" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1213">
              F
            </p>
          </div>
          <div className="absolute inset-[21.31%_65.6%_64.26%_25.87%]" data-node-id="I5431:72110;60:1214" data-name="D">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1215" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[27.06%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1216">
              D
            </p>
          </div>
          <div className="absolute inset-[21.31%_75.73%_64.26%_15.73%]" data-node-id="I5431:72110;60:1217" data-name="S">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1218" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1219">
              S
            </p>
          </div>
          <div className="absolute inset-[21.31%_85.6%_64.26%_5.87%]" data-node-id="I5431:72110;60:1220" data-name="A">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1221" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1222">
              A
            </p>
          </div>
          <div className="absolute inset-[2.75%_0.8%_82.82%_90.67%]" data-node-id="I5431:72110;60:1223" data-name="P">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1224" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1225">
              P
            </p>
          </div>
          <div className="absolute inset-[2.75%_10.67%_82.82%_80.8%]" data-node-id="I5431:72110;60:1226" data-name="O">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1227" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[22.34%] not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1228">
              O
            </p>
          </div>
          <div className="absolute inset-[2.75%_20.8%_82.82%_70.67%]" data-node-id="I5431:72110;60:1229" data-name="I">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1230" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[40.63%] not-italic right-[43.39%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1231">
              I
            </p>
          </div>
          <div className="absolute inset-[2.75%_30.67%_82.82%_60.8%]" data-node-id="I5431:72110;60:1232" data-name="U">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1233" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1234">
              U
            </p>
          </div>
          <div className="absolute inset-[2.75%_40.8%_82.82%_50.67%]" data-node-id="I5431:72110;60:1235" data-name="Y">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1236" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1237">
              Y
            </p>
          </div>
          <div className="absolute inset-[2.75%_50.67%_82.82%_40.8%]" data-node-id="I5431:72110;60:1238" data-name="T">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1239" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1240">
              T
            </p>
          </div>
          <div className="absolute inset-[2.75%_60.8%_82.82%_30.67%]" data-node-id="I5431:72110;60:1241" data-name="R">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1242" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1243">
              R
            </p>
          </div>
          <div className="absolute inset-[2.75%_70.67%_82.82%_20.8%]" data-node-id="I5431:72110;60:1244" data-name="E">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1245" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[28.8%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1246">
              E
            </p>
          </div>
          <div className="absolute inset-[2.75%_80.8%_82.82%_10.67%]" data-node-id="I5431:72110;60:1247" data-name="W">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1248" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[18.75%] not-italic right-[14.67%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1249">
              W
            </p>
          </div>
          <div className="absolute inset-[2.75%_90.67%_82.82%_0.8%]" data-node-id="I5431:72110;60:1250" data-name="Q">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:72110;60:1251" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[22.34%] not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:72110;60:1252">
              Q
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5604:19274" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5604:19275" data-name="Navigation">
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center opacity-0 relative shrink-0" data-node-id="5604:19277" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5604:19278" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="5604:19279">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
                <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5604:19280" data-name="Shapes">
                  <div className="absolute inset-[-1.25%_-2.63%_-5%_-0.66%]">
                    <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute flex h-[11px] items-center justify-center left-1/2 top-[calc(50%-5px)] w-[54px]" data-node-id="5604:19283">
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
