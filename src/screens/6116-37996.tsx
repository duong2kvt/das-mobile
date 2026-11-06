const imgShapes = "/das-mobile/assets/10daf4a09753491ee9a1b1e7.svg";
const imgGroup1171277045 = "/das-mobile/assets/e94490706117e39bb49d4adc.svg";
const imgPostCard = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/163ab8757d8be2e1102f766e.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage726 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgNote = "/das-mobile/assets/6748dd4a07534f13152ba7f4.png";
const imgPaperTape07 = "/das-mobile/assets/f6ba834236a37f4cd178dd8e.png";
const imgMascot72 = "/das-mobile/assets/348d405b18d3a1e63142982f.png";
const imgLogoapp25 = "/das-mobile/assets/97add714816a0cd904753bad.png";
const imgShape = "/das-mobile/assets/7c0fdf8ed263021461522f7b.svg";
const imgShape1 = "/das-mobile/assets/3eec184dfadb9fb89a30e513.svg";
const imgShape2 = "/das-mobile/assets/41daa07eddd6bb9a3b67a972.svg";
const imgVector = "/das-mobile/assets/08e2ea30f283c8d79434719c.svg";
const imgVector1 = "/das-mobile/assets/b0eafc4855e90f97c889a926.svg";
const imgShapes1 = "/das-mobile/assets/a82f99c24785f6e267e9b016.svg";
const imgGroup1171277046 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";
const imgVector1166Stroke = "/das-mobile/assets/3bab80386409cded3a6e1d85.svg";
const imgGroup427322577 = "/das-mobile/assets/e03b14120c81343b03de5f6a.svg";
const imgVector1164Stroke = "/das-mobile/assets/0aa62457da9e5351cebff5ff.svg";
const imgGroup427322578 = "/das-mobile/assets/844e6fdab5c0d83a1e861801.svg";
const imgPattern = "/das-mobile/assets/76ed41020127fe56059f8376.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/ff76c7636a940fbe3af24121.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/62c7bd39ba7b0828956b5aa1.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/68761107a3b2a096878d2f9c.svg";
const imgVector1165 = "/das-mobile/assets/234a3ea4a47c2d185940cf92.svg";
const imgImage = "/das-mobile/assets/c000660dafe67b9daa61bc62.svg";
const imgUnion = "/das-mobile/assets/a0500992e908c59785f9a0a8.svg";
const imgUnion1 = "/das-mobile/assets/0a0de577ecbde0e3c7e5733e.svg";
const imgGroup1171277055 = "/das-mobile/assets/0fc389763dfb163f6fedbf6f.svg";
const imgIconBadge = "/das-mobile/assets/4e94525fff461e555e940e97.svg";
const imgUnion2 = "/das-mobile/assets/4e6e11391863f1055bf72315.svg";
const imgGroup1171277079 = "/das-mobile/assets/3abb1d7288503e4976eb1fc7.svg";
const imgUnion3 = "/das-mobile/assets/439ce79c3d60354c904d01e9.svg";
const imgGroup1171277078 = "/das-mobile/assets/359a44644121288f6dcfee63.svg";
const imgGroup1171277056 = "/das-mobile/assets/c286d3c880777651c2fe104e.svg";
const imgIllustration = "/das-mobile/assets/a3cd20a99b72ceced7c9e285.svg";
const imgVector2 = "/das-mobile/assets/c74d81e0d3569a427870c480.svg";
const imgGroup1171277057 = "/das-mobile/assets/c286d3c880777651c2fe104e.svg";
const imgShapes2 = "/das-mobile/assets/f898a23e8faa4e007f56223e.svg";
const imgGroup1171277047 = "/das-mobile/assets/8b2de2ac8c061602ad80677c.svg";
const imgShapes3 = "/das-mobile/assets/a351297f4c10ce5b481b4008.svg";

type IconButtonProps = {
  className?: string;
  light?: boolean;
  type?: "Left";
};

function IconButton({ className, light = false, type = "Left" }: IconButtonProps) {
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

export default function PostCard() {
  return (
    <div className="relative size-full" data-node-id="6116:37996" data-name="Post card">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPostCard} />
      <div className="absolute h-[820px] left-[-10px] top-[56px] w-[445px]" data-node-id="6116:37997" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.51%] left-[-32.11%] max-w-none top-[-4.51%] w-[158.98%]" src={imgBook} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="6116:37998" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I6116:37998;4568:31676" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6116:37998;4568:31677" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6116:37998;4568:31678" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I6116:37998;4591:64448" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6116:37998;4568:31692" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6116:37998;4568:31693" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6116:37998;4847:20305" data-name="Icon">
            <div className="absolute flex h-[56.58px] items-center justify-center left-[7.17px] top-[1.88px] w-[52.999px]" data-node-id="I6116:37998;4847:20306">
              <div className="flex-none rotate-30">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I6116:37998;4847:20308" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I6116:37998;4847:20311" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.27%_8.35%_5.99%_6.93%]" data-node-id="I6116:37998;4847:20313" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.34px] text-[#686f2e] text-[3.424px] top-[3.82px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6116:37998;4847:20315" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[52.582px] items-center justify-center left-[2.63px] top-[-1.98px] w-[45.665px]" data-node-id="I6116:37998;4847:20316">
              <div className="flex-none rotate-15">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I6116:37998;4847:20318" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I6116:37998;4847:20321" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.26%_8.34%_6.01%_6.94%]" data-node-id="I6116:37998;4847:20323" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.53px] text-[#2f5f7c] text-[3.424px] top-[3.67px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6116:37998;4847:20325" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[45px] left-[-2.42px] top-[-1.61px] w-[35.218px]" data-node-id="I6116:37998;4847:20326" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I6116:37998;4847:20328" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[1.957px]" data-node-id="I6116:37998;4847:20331" data-name="Frame border">
                <div className="relative shrink-0 size-[29.348px]" data-node-id="I6116:37998;4847:20332" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I6116:37998;4847:20333" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.05px] text-[#b1352a] text-[3.424px] top-[3.8px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6116:37998;4847:20335" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6116:37998;5131:35069" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6116:37998;5131:35070" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6116:37998;5131:35303" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6116:37998;5961:95100" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6116:37998;5961:95101" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6116:37998;5961:98755" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="I6116:37998;5961:98756" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I6116:37998;5961:98756;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[52px] top-0" data-node-id="I6116:37998;5961:98756;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="absolute left-[2.97px] size-[46.065px] top-[2.96px]" data-node-id="I6116:37998;5961:98756;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute left-[7.85px] size-[36.198px] top-[7.91px]" data-node-id="I6116:37998;5961:98756;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[750px] items-start justify-center left-[calc(50%-16px)] pt-[24px] top-[calc(50%-47px)] w-[380px]" data-node-id="6116:37999" data-name="Containner">
        <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-[354px]" data-node-id="6116:38000" data-name="UI layout">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]" data-node-id="6116:38001" data-name="Navigation">
            <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
            <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="I6116:38001;5415:24230" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="I6116:38001;5415:24231" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Thông tin cổ vật
              </p>
            </div>
            <div className="opacity-0 relative shrink-0 size-[40px]" data-node-id="I6116:38001;5415:24232">
              <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6116:38001;5415:24233" data-name="Shapes">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6116:38001;5415:24236" data-name="Icon">
                <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I6116:38001;5415:24237">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="6116:38002" data-name="Content">
            <div className="content-stretch flex flex-col h-[634px] items-center justify-between pb-[32px] pt-[28px] relative shrink-0 w-full" data-node-id="6116:38003" data-name="Meseum Info">
              <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2 top-0" data-node-id="6116:38004" data-name="Note">
                <div className="-translate-x-1/2 absolute aspect-[354/634] bottom-0 left-1/2 top-0" data-node-id="6116:38006" data-name="note">
                  <div className="absolute inset-[-0.16%_-1.13%_-0.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" height="639" src={imgNote} width="359" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] left-[calc(50%+165px)] size-[40px] top-[-16px]" data-node-id="6116:38008" data-name="Badge">
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="I6116:38008;4848:33769" data-name="BASE">
                  <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="absolute contents inset-0" data-node-id="I6116:38008;4848:33770">
                  <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="I6116:38008;4848:33771" data-name="Vector 1166 (Stroke)">
                    <div className="absolute inset-[-1.92%_-1.89%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
                    </div>
                  </div>
                  <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
                  </div>
                  <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="I6116:38008;4848:33773" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(-56.9222cqw,8.04409cqh)] rotate-[75.41deg] skew-x-[-0.33deg] w-[hypot(43.0778cqw,91.9559cqh)]">
                      <div className="relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-171.42%_-54.38%_-158.45%_-57.34%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[-2.69%_-1.69%_-1.46%_-2%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup427322578} />
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="I6116:38008;4848:33775" data-name="Pattern">
                  <div className="absolute inset-[-1%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern} />
                  </div>
                </div>
                <div className="absolute contents inset-[1.1%_50.69%_80.06%_16.84%]" data-node-id="I6116:38008;4848:33776" style={{ containerType: "size" }}>
                  <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="I6116:38008;4848:33777" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="I6116:38008;4848:33778" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="I6116:38008;4848:33779" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="I6116:38008;4848:33780" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="I6116:38008;4848:33781">
                  <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1165} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-node-id="6116:38009" data-name="Top">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[1.2] not-italic relative shrink-0 text-[#291d14] text-[24px] text-center tracking-[-0.72px] w-[271px]" data-node-id="6116:38010" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Đầu chim phượng `}</p>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="6116:38011" data-name="Top">
                  <div className="mb-[-28px] relative shrink-0 size-[240px]" data-node-id="6116:38012" data-name="Image Frame">
                    <div className="absolute flex h-[235.699px] items-center justify-center left-[3.12px] top-[0.8px] w-[235.694px]" data-node-id="6116:38013">
                      <div className="-rotate-3 flex-none">
                        <div className="h-[224.269px] relative w-[224.264px]" data-name="Image">
                          <div className="absolute inset-[-0.52%_-1.32%_-0.71%_-1.32%]">
                            <img alt="" className="block max-w-none size-full" src={imgImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[57.975px] items-center justify-center left-[-11.8px] top-0 w-[61.442px]" data-node-id="6116:38023">
                      <div className="flex-none rotate-[138.4deg]">
                        <div className="h-[21.639px] relative w-[62.951px]" data-name="Paper Tape_07">
                          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgPaperTape07} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[188.852px] top-[calc(50%-1.96px)]" data-node-id="6116:38026" data-name="Artifact image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6.857px] h-[48px] items-center justify-center px-[6.857px] relative shrink-0 w-[120px]" data-node-id="6116:38027" data-name="Button">
                    <div className="absolute h-[48px] left-0 top-0 w-[120px]" data-node-id="6116:38028" data-name="Union">
                      <div className="absolute inset-[-2.29%_-2.14%_-5.15%_-0.8%]">
                        <img alt="" className="block max-w-none size-full" src={imgUnion} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] h-[12px] leading-[normal] min-w-px not-italic relative text-[#291d14] text-[16px] text-center tracking-[-0.48px]" data-node-id="6116:38032" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      Khoe cổ vật
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="6116:38033" data-name="Content">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[320px]" data-node-id="6116:38034" data-name="Content container">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="6116:38038" data-name="List">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="6116:38039" data-name="Row">
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="6116:38040" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="6116:38041" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I6116:38041;5642:79155">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion1} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I6116:38041;5642:79201" data-name="Icon/Histoty">
                              <div className="absolute inset-[8.33%_5.09%_8.33%_4.17%]" data-node-id="I6116:38041;5642:79201;4856:22816">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277055} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6116:38042" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="6116:38043" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Thời kỳ
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="6116:38044" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Nhà Trần (1225–1400)
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="6116:38045" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="6116:38046" data-name="Icon Badge">
                            <div className="absolute inset-[-1.56%_-3.13%_-3.12%_-1.56%]">
                              <img alt="" className="block max-w-none size-full" src={imgIconBadge} />
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6116:38047" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="6116:38048" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Chất liệu
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="6116:38049" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Đất nung
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="6116:38050" data-name="Row">
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="6116:38051" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="6116:38052" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I6116:38052;5642:79158">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion2} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I6116:38052;5642:79238" data-name="Icon/Dimension">
                              <div className="absolute inset-[8.33%_8.06%_8.35%_8.6%]" data-node-id="I6116:38052;5642:79238;5642:79224">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277079} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6116:38053" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="6116:38054" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Kích thước
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="6116:38055" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Khoảng 45–55 cm
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="6116:38056" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="6116:38057" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I6116:38057;5642:79152">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion3} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I6116:38057;5642:79268" data-name="Icon/IUse">
                              <div className="absolute inset-[8.32%_7.59%_8.33%_8.13%]" data-node-id="I6116:38057;5642:79268;5642:79251">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277078} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="6116:38058" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="6116:38059" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Công năng
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="6116:38060" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Trang trí mái cung điện
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="6116:38061" data-name="Guide">
                <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="6116:38062" data-name="Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-[calc(50%+0.5px)] rounded-[100px] size-[40px] top-1/2" data-node-id="6116:38063" data-name="BG" />
                  <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="6116:38064" data-name="mascot 7 2">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                      <img alt="" className="absolute left-[-43.1%] max-w-none size-[183.51%] top-[-21.05%]" src={imgMascot72} />
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-7.03px] size-[18.535px] top-[-6px]" data-node-id="6116:38065">
                    <div className="flex-none rotate-10">
                      <div className="bg-[#346888] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                        <div className="absolute inset-[18.79%_37.1%_18.75%_37.5%]" data-node-id="6116:38066">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277056} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium_Italic'] font-medium italic leading-[20px] relative shrink-0 text-[#3c2b1e] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6116:38069" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Bạn có biết?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="6116:38070">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[956px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="6116:38071">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,0,0,0.8)] h-[956px] relative w-[440px]" data-name="Dimmer" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 overflow-clip rounded-[var(--corner-radius\/medium,16px)] top-1/2 w-[376px]" data-node-id="6116:38560" data-name="Voucher info">
        <div className="bg-[#f4f0ed] content-stretch flex gap-[var(--gap\/medium,16px)] items-start pb-[var(--padding\/small,12px)] pt-[var(--padding\/medium,16px)] px-[var(--padding\/medium,16px)] relative shrink-0 w-full" data-node-id="6116:38561" data-name="Top">
          <div className="content-stretch flex flex-1 flex-col gap-[var(--gap\/xsmall,8px)] items-start min-w-px relative" data-node-id="6116:38562" data-name="Details">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="6116:38563" data-name="Brand">
              <p className="[word-break:break-word] flex-1 font-['Inter:Semi_Bold'] font-semibold leading-[1.2] min-w-px not-italic relative text-[#291d14] text-[22px] tracking-[-0.44px]" data-node-id="6116:38565" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Bảo tàng Lịch sử Thành phố Hồ Chí Minh
              </p>
            </div>
            <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular'] font-[450] leading-[1.4] overflow-hidden relative shrink-0 text-[#664932] text-[18px] text-ellipsis tracking-[-0.36px] w-full" data-node-id="6116:38566" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Vé tham quan tại bảo tàng Lịch sử Thành phố Hồ Chí Minh
            </p>
          </div>
        </div>
        <div className="h-[16px] relative shrink-0 w-full" data-node-id="6116:38567" data-name="illustration">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllustration} />
        </div>
        <div className="bg-[#f4f0ed] content-stretch flex flex-col gap-[var(--gap\/medium,16px)] items-start justify-end pb-[16px] pt-[12px] px-[16px] relative shrink-0 w-full" data-node-id="6116:38573" data-name="Bottom">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6116:38574" data-name="Content">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full" data-node-id="6116:38575" data-name="Date&value">
              <div className="[word-break:break-word] content-stretch flex gap-[var(--gap\/3xsmall,2px)] items-center justify-end leading-[24px] not-italic relative shrink-0 text-[16px] text-right tracking-[-0.32px] whitespace-nowrap" data-node-id="6116:38579" data-name="Expired date">
                <p className="font-['Inter:Regular'] font-[450] relative shrink-0 text-[#291d14]" data-node-id="6116:38580" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Ngày hết hạn:
                </p>
                <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#3b82f6]" data-node-id="6116:38581" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  30/06/2016
                </p>
              </div>
            </div>
            <div className="bg-white border-[#b49984] border-[1.5px] border-solid content-stretch flex flex-col gap-[var(--gap\/large,24px)] items-center p-[var(--padding\/medium,16px)] relative rounded-[16px] shrink-0 w-full" data-node-id="6116:38582" data-name="Code card">
              <div className="content-stretch flex flex-col gap-[var(--gap\/2xsmall,4px)] items-center relative shrink-0 w-full" data-node-id="6116:38583" data-name="Mid">
                <div className="aspect-[250/250] bg-[var(--color\/bg\/white\/default,white)] overflow-clip relative rounded-[var(--corner-radius\/2xsmall,4px)] shrink-0 w-full" data-node-id="6116:38584" data-name="QR Code">
                  <div className="absolute inset-[4.44%]" data-node-id="6116:38585" data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[12.8px] size-[64px] top-1/2" data-node-id="6116:38586" data-name="logoapp2 5">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.8px] size-full" src={imgLogoapp25} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="6116:38587" data-name="Guide">
              <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="6116:38588" data-name="Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-[calc(50%+0.5px)] rounded-[100px] size-[40px] top-1/2" data-node-id="6116:38589" data-name="BG" />
                <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="6116:38590" data-name="mascot 7 2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                    <img alt="" className="absolute left-[-43.1%] max-w-none size-[183.51%] top-[-21.05%]" src={imgMascot72} />
                  </div>
                </div>
                <div className="absolute flex items-center justify-center right-[-7.03px] size-[18.535px] top-[-6px]" data-node-id="6116:38591">
                  <div className="flex-none rotate-10">
                    <div className="bg-[#346888] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                      <div className="absolute inset-[18.8%_37.1%_18.74%_37.5%]" data-node-id="6116:38592">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277057} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-1 font-['Inter:Medium_Italic'] font-medium italic leading-[1.4] min-w-px relative text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="6116:38595" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                “Hãy đến trực tiếp bảo tàng và sử dụng mã QR phía trên nhé”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="6116:38119" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6116:38120" data-name="Navigation">
          <div className="h-[40px] relative shrink-0 w-[76px]" data-node-id="I6116:38120;5415:24248" data-name="Icon Button">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6116:38120;5415:24248;4856:21239" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes2} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6116:38120;5415:24248;4856:21242" data-name="Icon">
              <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I6116:38120;5415:24248;4856:21243">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277047} />
              </div>
            </div>
          </div>
          <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="I6116:38120;5415:24251">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6116:38120;5415:24252" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes3} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6116:38120;5415:24255" data-name="Icon">
              <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I6116:38120;5415:24256">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
