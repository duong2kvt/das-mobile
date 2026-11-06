const imgRibbo = "/das-mobile/assets/14e58da77b96e71e4f238cfa.svg";
const imgImage = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgNote1 = "/das-mobile/assets/8a77478857a71585b5b156ed.png";
const imgDictation = "/das-mobile/assets/683255cdf30942099054d1a4.svg";
const imgEmoji = "/das-mobile/assets/feb054b174ee9813b9910380.svg";
const imgRectangle = "/das-mobile/assets/a04ea56db28d9859efb4ac2a.svg";
const imgRectangle1 = "/das-mobile/assets/7be7bda61bc83646d4b80e4c.svg";
const imgRectangle2 = "/das-mobile/assets/b40f1269b1b4be65da96e949.svg";
const imgRectangle3 = "/das-mobile/assets/a52b409de737b98892411081.svg";
const imgDeleteButton = "/das-mobile/assets/4a5b06018fba839b0d8a6543.svg";
const imgShift = "/das-mobile/assets/e64eb6781fc513ad78414151.svg";
const imgNote = "/das-mobile/assets/600981cc10222cee1e4f97f3.svg";
const imgPattern = "/das-mobile/assets/26feaa6974772afda4f59d96.svg";
const imgPattern1 = "/das-mobile/assets/478bc1fd4b0fc518118d8405.svg";
const imgPattern2 = "/das-mobile/assets/a2860edce1068b0f8037a5b7.svg";
const imgPattern3 = "/das-mobile/assets/5d5c6a5375f4d4b2cdf4df50.svg";
const imgLine79Stroke = "/das-mobile/assets/010f2b9ae3234bd4f90d2133.svg";
const imgUnion = "/das-mobile/assets/eed0ab2e65a4d506c59a9d4c.svg";

type RibbonProps = {
  className?: string;
  size?: "M";
  type?: "Red";
};

function Ribbon({ className, size = "M", type = "Red" }: RibbonProps) {
  return (
    <div className={className || "h-[52px] relative w-[257px]"} data-node-id="5239:47808">
      <div className="absolute h-[52px] left-0 top-0 w-[257px]" data-node-id="5239:47809" data-name="Ribbo">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRibbo} />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[16px] leading-[normal] left-1/2 not-italic text-[#f4f0ed] text-[20px] text-center top-[calc(50%-13px)] tracking-[-0.6px] w-[137px]" data-node-id="5239:47866" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        Tên bạn là gì ?
      </p>
    </div>
  );
}

export default function TypingName() {
  return (
    <div className="relative size-full" data-node-id="5431:48558" data-name="Typing name">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48559" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-112.95%] max-w-none top-0 w-[325.91%]" src={imgImage} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[63.789px] bg-[#dadada] h-[341px] left-[calc(50%+0.5px)] top-[615px] w-[440px]" data-node-id="5431:48560" data-name="Keyboard">
        <div className="absolute bottom-0 h-[39.893px] left-[1.17px] right-[-1.17px]" data-node-id="I5431:48560;60:1130" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[9.28px] h-[5.867px] left-1/2 rounded-[117.333px] w-[157.227px]" data-node-id="I5431:48560;60:1130;362:15723" data-name="Home Indicator" />
        </div>
        <div className="absolute contents inset-[2.75%_0.8%_8.25%_0.8%]" data-node-id="I5431:48560;60:1131" data-name="Keys">
          <div className="absolute inset-[82.82%_8%_8.59%_88%]" data-node-id="I5431:48560;60:1132" data-name="Dictation">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDictation} />
          </div>
          <div className="absolute inset-[82.47%_86.13%_8.25%_6.67%]" data-node-id="I5431:48560;60:1141" data-name="Emoji">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEmoji} />
          </div>
          <div className="absolute inset-[58.42%_0.8%_27.15%_75.73%]" data-node-id="I5431:48560;60:1148" data-name="Return">
            <div className="absolute inset-[0_0.25px_0.22px_0]" data-node-id="I5431:48560;60:1149" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.25px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:48560;60:1150">
              Go
            </p>
          </div>
          <div className="absolute inset-[58.42%_25.87%_27.15%_25.6%]" data-node-id="I5431:48560;60:1151" data-name="Space">
            <div className="absolute inset-[0_-0.45px_0.22px_0]" data-node-id="I5431:48560;60:1152" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle1} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_-0.45px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:48560;60:1153">
              space
            </p>
          </div>
          <div className="absolute inset-[58.42%_76%_27.15%_0.8%]" data-node-id="I5431:48560;60:1154" data-name="123">
            <div className="absolute inset-[0_0.08px_0.22px_0]" data-node-id="I5431:48560;60:1155" data-name="Rectangle">
              <div className="absolute inset-[0_0_-2.39%_0]">
                <img alt="" className="block max-w-none size-full" src={imgRectangle2} />
              </div>
            </div>
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.08px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:48560;60:1156">
              123
            </p>
          </div>
          <div className="absolute contents inset-[39.86%_0.8%_45.7%_88%]" data-node-id="I5431:48560;60:1157" data-name="Delete">
            <div className="absolute inset-[39.86%_0.8%_45.7%_88%]" data-node-id="I5431:48560;60:1158" data-name="Key Light">
              <div className="absolute inset-[0_0.28px_0.22px_0]" data-node-id="I5431:48560;60:1159" data-name="Rectangle">
                <div className="absolute inset-[0_0_-2.39%_0]">
                  <img alt="" className="block max-w-none size-full" src={imgRectangle3} />
                </div>
              </div>
              <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] inset-[26.19%_0.28px_23.01%_0] leading-[24.64px] not-italic text-[#111315] text-[18.77px] text-center tracking-[-0.32px]" data-node-id="I5431:48560;60:1160">{` `}</p>
            </div>
            <div className="absolute inset-[44.21%_3.38%_49.95%_90.58%]" data-node-id="I5431:48560;60:1161" data-name="Delete Button">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDeleteButton} />
            </div>
          </div>
          <div className="absolute contents inset-[39.86%_88%_45.7%_0.8%]" data-node-id="I5431:48560;60:1170" data-name="Shift">
            <div className="absolute inset-[39.86%_88%_45.7%_0.8%]" data-node-id="I5431:48560;60:1171" data-name="Key Light">
              <div className="absolute bg-[#fcfcfc] inset-[0_0.28px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1172" data-name="Rectangle" />
              <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[48.07%] not-italic right-[51.93%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1173">{` `}</p>
            </div>
            <div className="absolute inset-[44.05%_91.06%_50.29%_3.91%]" data-node-id="I5431:48560;60:1174" data-name="Shift">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShift} />
            </div>
          </div>
          <div className="absolute inset-[39.86%_15.47%_45.7%_76%]" data-node-id="I5431:48560;60:1175" data-name="M">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1176" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[21.88%] not-italic right-[19.53%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1177">
              M
            </p>
          </div>
          <div className="absolute inset-[39.86%_25.6%_45.7%_65.87%]" data-node-id="I5431:48560;60:1178" data-name="N">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1179" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1180">
              N
            </p>
          </div>
          <div className="absolute inset-[39.86%_35.73%_45.7%_55.73%]" data-node-id="I5431:48560;60:1181" data-name="B">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1182" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1183">
              B
            </p>
          </div>
          <div className="absolute inset-[39.86%_45.6%_45.7%_45.87%]" data-node-id="I5431:48560;60:1184" data-name="V">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1185" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1186">
              V
            </p>
          </div>
          <div className="absolute inset-[39.86%_55.73%_45.7%_35.73%]" data-node-id="I5431:48560;60:1187" data-name="C">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1188" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1189">
              C
            </p>
          </div>
          <div className="absolute inset-[39.86%_65.6%_45.7%_25.87%]" data-node-id="I5431:48560;60:1190" data-name="X">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1191" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1192">
              X
            </p>
          </div>
          <div className="absolute inset-[39.86%_75.73%_45.7%_15.73%]" data-node-id="I5431:48560;60:1193" data-name="Z">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1194" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1195">
              Z
            </p>
          </div>
          <div className="absolute inset-[21.31%_5.6%_64.26%_85.87%]" data-node-id="I5431:48560;60:1196" data-name="L">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1197" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1198">
              L
            </p>
          </div>
          <div className="absolute inset-[21.31%_15.73%_64.26%_75.73%]" data-node-id="I5431:48560;60:1199" data-name="K">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1200" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1201">
              K
            </p>
          </div>
          <div className="absolute inset-[21.31%_25.6%_64.26%_65.87%]" data-node-id="I5431:48560;60:1202" data-name="J">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1203" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1204">
              J
            </p>
          </div>
          <div className="absolute inset-[21.31%_35.73%_64.26%_55.73%]" data-node-id="I5431:48560;60:1205" data-name="H">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1206" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1207">
              H
            </p>
          </div>
          <div className="absolute inset-[21.31%_45.6%_64.26%_45.87%]" data-node-id="I5431:48560;60:1208" data-name="G">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1209" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1210">
              G
            </p>
          </div>
          <div className="absolute inset-[21.31%_55.73%_64.26%_35.73%]" data-node-id="I5431:48560;60:1211" data-name="F">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1212" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[31.46%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1213">
              F
            </p>
          </div>
          <div className="absolute inset-[21.31%_65.6%_64.26%_25.87%]" data-node-id="I5431:48560;60:1214" data-name="D">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1215" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[27.06%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1216">
              D
            </p>
          </div>
          <div className="absolute inset-[21.31%_75.73%_64.26%_15.73%]" data-node-id="I5431:48560;60:1217" data-name="S">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1218" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1219">
              S
            </p>
          </div>
          <div className="absolute inset-[21.31%_85.6%_64.26%_5.87%]" data-node-id="I5431:48560;60:1220" data-name="A">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1221" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1222">
              A
            </p>
          </div>
          <div className="absolute inset-[2.75%_0.8%_82.82%_90.67%]" data-node-id="I5431:48560;60:1223" data-name="P">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1224" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1225">
              P
            </p>
          </div>
          <div className="absolute inset-[2.75%_10.67%_82.82%_80.8%]" data-node-id="I5431:48560;60:1226" data-name="O">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1227" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[22.34%] not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1228">
              O
            </p>
          </div>
          <div className="absolute inset-[2.75%_20.8%_82.82%_70.67%]" data-node-id="I5431:48560;60:1229" data-name="I">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1230" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[40.63%] not-italic right-[43.39%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1231">
              I
            </p>
          </div>
          <div className="absolute inset-[2.75%_30.67%_82.82%_60.8%]" data-node-id="I5431:48560;60:1232" data-name="U">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1233" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-1/4 not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1234">
              U
            </p>
          </div>
          <div className="absolute inset-[2.75%_40.8%_82.82%_50.67%]" data-node-id="I5431:48560;60:1235" data-name="Y">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1236" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[26.6%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1237">
              Y
            </p>
          </div>
          <div className="absolute inset-[2.75%_50.67%_82.82%_40.8%]" data-node-id="I5431:48560;60:1238" data-name="T">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1239" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1240">
              T
            </p>
          </div>
          <div className="absolute inset-[2.75%_60.8%_82.82%_30.67%]" data-node-id="I5431:48560;60:1241" data-name="R">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1242" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[28.12%] not-italic right-[29.26%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1243">
              R
            </p>
          </div>
          <div className="absolute inset-[2.75%_70.67%_82.82%_20.8%]" data-node-id="I5431:48560;60:1244" data-name="E">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1245" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[31.25%] not-italic right-[28.8%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1246">
              E
            </p>
          </div>
          <div className="absolute inset-[2.75%_80.8%_82.82%_10.67%]" data-node-id="I5431:48560;60:1247" data-name="W">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1248" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[18.75%] not-italic right-[14.67%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1249">
              W
            </p>
          </div>
          <div className="absolute inset-[2.75%_90.67%_82.82%_0.8%]" data-node-id="I5431:48560;60:1250" data-name="Q">
            <div className="absolute bg-[#fcfcfc] inset-[0_-0.45px_0.22px_0] rounded-[5.397px] shadow-[0px_1.173px_0px_0px_#898a8d]" data-node-id="I5431:48560;60:1251" data-name="Rectangle" />
            <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular'] leading-[normal] left-[22.34%] not-italic right-[24.4%] text-[#111315] text-[26.4px] text-center top-[calc(50%-14.86px)] tracking-[-0.5547px] whitespace-nowrap" data-node-id="I5431:48560;60:1252">
              Q
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[294px] left-[31px] top-[291px] w-[377px]" data-node-id="5431:48561" data-name="Popup">
        <div className="absolute bottom-0 left-0 top-[13.11%] w-[377px]" data-node-id="5431:48562" data-name="note">
          <div className="absolute inset-[-0.2%_-0.53%_-0.78%_-0.13%]">
            <img alt="" className="block max-w-none size-full" src={imgNote} />
          </div>
        </div>
        <div className="absolute bottom-[3.05%] content-stretch flex flex-col gap-[48px] items-center justify-center left-0 top-[22.27%] w-[376px]" data-node-id="5431:48563" data-name="Content">
          <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.48px)] top-[-0.23px]" data-node-id="5431:48564" data-name="Note">
            <div className="-translate-x-1/2 absolute bottom-[0.13%] left-[calc(50%-0.48px)] top-[-0.11%] w-[353.045px]" data-node-id="5431:48565" data-name="note">
              <div className="absolute inset-[-0.23%_-0.28%_-0.46%_-0.14%]">
                <img alt="" className="block max-w-none size-full" height="220.99" src={imgNote1} width="354.545" />
              </div>
            </div>
            <div className="absolute flex h-[24.07px] items-center justify-center left-[18.7px] top-[6.98px] w-[24px]" data-node-id="5431:48566">
              <div className="flex-none rotate-180">
                <div className="h-[24.07px] relative w-[24px]" data-name="Pattern">
                  <div className="absolute inset-[-2.08%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[7.49px] h-[24.07px] right-[19.3px] w-[24px]" data-node-id="5431:48571" data-name="Pattern">
              <div className="absolute inset-[-2.08%]">
                <img alt="" className="block max-w-none size-full" src={imgPattern1} />
              </div>
            </div>
            <div className="absolute flex items-center justify-center right-[19.3px] size-[24px] top-[6.98px]" data-node-id="5431:48576">
              <div className="-scale-y-100 flex-none">
                <div className="relative size-[24px]" data-name="Pattern">
                  <div className="absolute inset-[-2.08%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[11.56px] flex items-center justify-center left-[22.7px] size-[24px]" data-node-id="5431:48581">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="relative size-[24px]" data-name="Pattern">
                  <div className="absolute inset-[-2.08%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-1 flex-col items-center justify-between min-h-px pb-[32px] pt-[40px] relative w-full" data-node-id="5431:48587" data-name="Layout">
            <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0" data-node-id="5431:48588" data-name="Input">
              <div className="bg-[#f4f0ed] border border-[#8f6747] border-solid content-stretch flex gap-[8px] h-[48px] items-center px-[16px] relative rounded-[12px] shrink-0 w-[260px]" data-node-id="5431:48589" data-name="Field" />
              <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[16px] top-1/2 w-[91px]" data-node-id="5431:48592" data-name="Content">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[16px] leading-[normal] not-italic relative shrink-0 text-[#41392d] text-[24px] tracking-[-0.72px] w-[91px]" data-node-id="5431:48593" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Đen vâu
                </p>
                <div className="absolute content-stretch flex gap-[8px] items-center left-[97px] top-[-3px]" data-node-id="5431:72363" data-name="Content">
                  <div className="flex h-[22px] items-center justify-center relative shrink-0 w-px" data-node-id="I5431:72363;5431:72243">
                    <div className="flex-none rotate-90">
                      <div className="h-px relative w-[22px]" data-name="Line 79 (Stroke)">
                        <div className="absolute inset-[-50%_-4.55%_-100%_-2.27%]">
                          <img alt="" className="block max-w-none size-full" src={imgLine79Stroke} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[56px] items-center justify-center px-[8px] relative shrink-0 w-[150px]" data-node-id="5431:48595" data-name="Button">
              <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="I5431:48595;5049:41247" data-name="Union">
                <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
                  <img alt="" className="block max-w-none size-full" src={imgUnion} />
                </div>
              </div>
              <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] min-w-px not-italic relative text-[#291d14] text-[18px] text-center tracking-[-0.54px]" data-node-id="I5431:48595;5049:41251" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Tiếp theo
              </p>
            </a>
          </div>
        </div>
        <Ribbon className="-translate-x-1/2 absolute h-[52px] left-[calc(50%+11px)] top-[5.63px] w-[257px]" />
      </div>
    </div>
  );
}
