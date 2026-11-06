const imgShapes = "/das-mobile/assets/19ec9b1bf3231ee7f3d54b1c.svg";
const imgGroup1171277045 = "/das-mobile/assets/57eadfea8cc85c22779628e4.svg";
const imgPostCard = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/163ab8757d8be2e1102f766e.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage726 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgNote = "/das-mobile/assets/6748dd4a07534f13152ba7f4.png";
const imgPaperTape07 = "/das-mobile/assets/f6ba834236a37f4cd178dd8e.png";
const imgMascot72 = "/das-mobile/assets/348d405b18d3a1e63142982f.png";
const imgNote1 = "/das-mobile/assets/a4a0fe432a22038634948c8e.png";
const imgImage561 = "/das-mobile/assets/28f47578cc0e31dc2d22e12c.png";
const imgShape = "/das-mobile/assets/3bdc01e3ba8bbd64ec6b16b0.svg";
const imgShape1 = "/das-mobile/assets/4eed1d13303f77cc650d07c2.svg";
const imgShape2 = "/das-mobile/assets/25b4cfb2c32131ac70ea39df.svg";
const imgVector = "/das-mobile/assets/412be15a4021180c0649a0aa.svg";
const imgVector1 = "/das-mobile/assets/b0eafc4855e90f97c889a926.svg";
const imgShapes1 = "/das-mobile/assets/b8cfdd672a7838a7d250d380.svg";
const imgGroup1171277046 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";
const imgVector1166Stroke = "/das-mobile/assets/1cbb2de87d20ffe8217d8f1a.svg";
const imgGroup427322577 = "/das-mobile/assets/da4e2e6f27c31c4602a3d2df.svg";
const imgVector1164Stroke = "/das-mobile/assets/5d788938d2feae0b781607c5.svg";
const imgGroup427322578 = "/das-mobile/assets/3cf9f720605d17cc057230f8.svg";
const imgPattern = "/das-mobile/assets/699a63079b3b3ee47f50ac02.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/b30ec77acde700bc34225cc1.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/f78a3380c59649c41c7ae506.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/99798e9ee1eda7fa200e604f.svg";
const imgVector1165 = "/das-mobile/assets/fc871bfd093c00ac5334e332.svg";
const imgImage = "/das-mobile/assets/36c7378e1bcefd029575400e.svg";
const imgUnion = "/das-mobile/assets/516dab399f4b72765cca998e.svg";
const imgUnion1 = "/das-mobile/assets/0a0de577ecbde0e3c7e5733e.svg";
const imgGroup1171277055 = "/das-mobile/assets/0fc389763dfb163f6fedbf6f.svg";
const imgIconBadge = "/das-mobile/assets/1cd5776e031e844f23848b12.svg";
const imgUnion2 = "/das-mobile/assets/4e6e11391863f1055bf72315.svg";
const imgGroup1171277079 = "/das-mobile/assets/3abb1d7288503e4976eb1fc7.svg";
const imgUnion3 = "/das-mobile/assets/439ce79c3d60354c904d01e9.svg";
const imgGroup1171277078 = "/das-mobile/assets/359a44644121288f6dcfee63.svg";
const imgGroup1171277056 = "/das-mobile/assets/c286d3c880777651c2fe104e.svg";
const imgImage560 = "/das-mobile/assets/4f67be34b1f67acc2e072ba1.svg";
const imgVector2 = "/das-mobile/assets/320928c89e1b4b8be9626ce7.svg";
const imgVector3 = "/das-mobile/assets/2b1b8f4c3f3f3fc9ac201eb6.svg";
const imgUnion4 = "/das-mobile/assets/56693d336904f24b4f66aaee.svg";
const imgUnion5 = "/das-mobile/assets/33a098b01d562c3ad67076da.svg";
const imgShapes2 = "/das-mobile/assets/7cdc101d2e52e43532f8dbdc.svg";
const imgGroup1171277047 = "/das-mobile/assets/3ccf8368523fbfd738d6f8b0.svg";
const imgShapes3 = "/das-mobile/assets/cc2a0fa56c4116ddc6650593.svg";

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
    <div className="relative size-full" data-node-id="5802:61396" data-name="Post card">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPostCard} />
      <div className="absolute h-[820px] left-[-10px] top-[56px] w-[445px]" data-node-id="5802:61397" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.51%] left-[-32.11%] max-w-none top-[-4.51%] w-[158.98%]" src={imgBook} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="5802:61398" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I5802:61398;4568:32129" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5802:61398;4568:32130" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5802:61398;4568:32131" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5802:61398;4591:64452" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5802:61398;4568:32145" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5802:61398;4568:32146" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I5802:61398;4848:61235" data-name="Icon">
            <div className="absolute flex h-[72.746px] items-center justify-center left-[9.22px] top-[2.41px] w-[68.142px]" data-node-id="I5802:61398;4848:61236">
              <div className="flex-none rotate-30">
                <div className="h-[57.857px] relative w-[45.28px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5802:61398;4848:61238" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.44px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[2.516px]" data-node-id="I5802:61398;4848:61241" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.26%_8.36%_6%_6.92%]" data-node-id="I5802:61398;4848:61243" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[10.73px] text-[#686f2e] text-[4.402px] top-[4.91px] tracking-[-0.088px] translate-x-full whitespace-nowrap" data-node-id="I5802:61398;4848:61245" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[67.605px] items-center justify-center left-[3.37px] top-[-2.54px] w-[58.712px]" data-node-id="I5802:61398;4848:61246">
              <div className="flex-none rotate-15">
                <div className="h-[57.857px] relative w-[45.28px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5802:61398;4848:61248" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.44px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.95%] items-center overflow-clip p-[2.516px]" data-node-id="I5802:61398;4848:61251" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.25%_8.34%_6.02%_6.93%]" data-node-id="I5802:61398;4848:61253" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[10.96px] text-[#2f5f7c] text-[4.402px] top-[4.72px] tracking-[-0.088px] translate-x-full whitespace-nowrap" data-node-id="I5802:61398;4848:61255" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[57.857px] left-[-3.12px] top-[-2.07px] w-[45.28px]" data-node-id="I5802:61398;4848:61256" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I5802:61398;4848:61258" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.44px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[2.516px]" data-node-id="I5802:61398;4848:61261" data-name="Frame border">
                <div className="relative shrink-0 size-[37.733px]" data-node-id="I5802:61398;4848:61262" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I5802:61398;4848:61263" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[10.35px] text-[#b1352a] text-[4.402px] top-[4.88px] tracking-[-0.088px] translate-x-full whitespace-nowrap" data-node-id="I5802:61398;4848:61265" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5802:61398;5131:35073" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5802:61398;5131:35074" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5802:61398;5131:35756" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5802:61398;4568:34183" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5802:61398;4568:34184" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5802:61398;5964:103464" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="I5802:61398;5964:103465" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I5802:61398;5964:103465;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[52px] top-0" data-node-id="I5802:61398;5964:103465;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="absolute left-[2.97px] size-[46.065px] top-[2.96px]" data-node-id="I5802:61398;5964:103465;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute left-[7.85px] size-[36.198px] top-[7.91px]" data-node-id="I5802:61398;5964:103465;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[750px] items-start justify-center left-[calc(50%-16px)] pt-[24px] top-[calc(50%-47px)] w-[380px]" data-node-id="5802:61399" data-name="Containner">
        <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-[354px]" data-node-id="5802:61400" data-name="UI layout">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]" data-node-id="5802:61401" data-name="Navigation">
            <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
            <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="I5802:61401;5415:24230" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="I5802:61401;5415:24231" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Thông tin cổ vật
              </p>
            </div>
            <div className="opacity-0 relative shrink-0 size-[40px]" data-node-id="I5802:61401;5415:24232">
              <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5802:61401;5415:24233" data-name="Shapes">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5802:61401;5415:24236" data-name="Icon">
                <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I5802:61401;5415:24237">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="5867:109144" data-name="Content">
            <div className="content-stretch flex flex-col h-[634px] items-center justify-between pb-[32px] pt-[28px] relative shrink-0 w-full" data-node-id="5867:109145" data-name="Meseum Info">
              <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2 top-0" data-node-id="5867:109146" data-name="Note">
                <div className="-translate-x-1/2 absolute aspect-[354/634] bottom-0 left-1/2 top-0" data-node-id="5867:109148" data-name="note">
                  <div className="absolute inset-[-0.16%_-1.13%_-0.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" height="639" src={imgNote} width="359" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] left-[calc(50%+165px)] size-[40px] top-[-16px]" data-node-id="5867:109150" data-name="Badge">
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="I5867:109150;4848:33769" data-name="BASE">
                  <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="absolute contents inset-0" data-node-id="I5867:109150;4848:33770">
                  <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="I5867:109150;4848:33771" data-name="Vector 1166 (Stroke)">
                    <div className="absolute inset-[-1.92%_-1.89%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
                    </div>
                  </div>
                  <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
                  </div>
                  <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="I5867:109150;4848:33773" style={{ containerType: "size" }}>
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
                <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="I5867:109150;4848:33775" data-name="Pattern">
                  <div className="absolute inset-[-1%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern} />
                  </div>
                </div>
                <div className="absolute contents inset-[1.1%_50.69%_80.06%_16.84%]" data-node-id="I5867:109150;4848:33776" style={{ containerType: "size" }}>
                  <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="I5867:109150;4848:33777" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="I5867:109150;4848:33778" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="I5867:109150;4848:33779" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="I5867:109150;4848:33780" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="I5867:109150;4848:33781">
                  <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1165} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0" data-node-id="5867:109151" data-name="Top">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[1.2] not-italic relative shrink-0 text-[#291d14] text-[24px] text-center tracking-[-0.72px] w-[271px]" data-node-id="5867:109152" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Đầu chim phượng `}</p>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="5867:109153" data-name="Top">
                  <div className="mb-[-28px] relative shrink-0 size-[240px]" data-node-id="5867:109154" data-name="Image Frame">
                    <div className="absolute flex h-[235.699px] items-center justify-center left-[3.12px] top-[0.8px] w-[235.694px]" data-node-id="5867:109155">
                      <div className="-rotate-3 flex-none">
                        <div className="h-[224.269px] relative w-[224.264px]" data-name="Image">
                          <div className="absolute inset-[-0.52%_-1.32%_-0.71%_-1.32%]">
                            <img alt="" className="block max-w-none size-full" src={imgImage} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex h-[57.975px] items-center justify-center left-[-11.8px] top-0 w-[61.442px]" data-node-id="5867:109165">
                      <div className="flex-none rotate-[138.4deg]">
                        <div className="h-[21.639px] relative w-[62.951px]" data-name="Paper Tape_07">
                          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgPaperTape07} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[188.852px] top-[calc(50%-1.96px)]" data-node-id="5867:109168" data-name="Artifact image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6.857px] h-[48px] items-center justify-center px-[6.857px] relative shrink-0 w-[120px]" data-node-id="5867:109169" data-name="Button">
                    <div className="absolute h-[48px] left-0 top-0 w-[120px]" data-node-id="5867:109170" data-name="Union">
                      <div className="absolute inset-[-2.29%_-2.14%_-5.15%_-0.8%]">
                        <img alt="" className="block max-w-none size-full" src={imgUnion} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] h-[12px] leading-[normal] min-w-px not-italic relative text-[#291d14] text-[16px] text-center tracking-[-0.48px]" data-node-id="5867:109174" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      Khoe cổ vật
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="5867:109175" data-name="Content">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[320px]" data-node-id="5867:109176" data-name="Content container">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="5867:109180" data-name="List">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="5867:109181" data-name="Row">
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="5867:109182" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="5867:109183" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5867:109183;5642:79155">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion1} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5867:109183;5642:79201" data-name="Icon/Histoty">
                              <div className="absolute inset-[8.33%_5.09%_8.33%_4.17%]" data-node-id="I5867:109183;5642:79201;4856:22816">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277055} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="5867:109184" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="5867:109185" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Thời kỳ
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="5867:109186" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Nhà Trần (1225–1400)
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="5867:109187" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="5867:109188" data-name="Icon Badge">
                            <div className="absolute inset-[-1.56%_-3.13%_-3.12%_-1.56%]">
                              <img alt="" className="block max-w-none size-full" src={imgIconBadge} />
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="5867:109189" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="5867:109190" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Chất liệu
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="5867:109191" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Đất nung
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="5867:109192" data-name="Row">
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="5867:109193" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="5867:109194" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5867:109194;5642:79158">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion2} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5867:109194;5642:79238" data-name="Icon/Dimension">
                              <div className="absolute inset-[8.33%_8.06%_8.35%_8.6%]" data-node-id="I5867:109194;5642:79238;5642:79224">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277079} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="5867:109195" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="5867:109196" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Kích thước
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="5867:109197" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Khoảng 45–55 cm
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-center min-w-px relative" data-node-id="5867:109198" data-name="Info">
                          <div className="relative shrink-0 size-[24px]" data-node-id="5867:109199" data-name="Icon Badge">
                            <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5867:109199;5642:79152">
                              <div className="-rotate-90 flex-none">
                                <div className="relative size-[24px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion3} />
                                </div>
                              </div>
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5867:109199;5642:79268" data-name="Icon/IUse">
                              <div className="absolute inset-[8.32%_7.59%_8.33%_8.13%]" data-node-id="I5867:109199;5642:79268;5642:79251">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277078} />
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="5867:109200" data-name="Content">
                            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 text-[#3c2b1e] text-[16px] tracking-[-0.32px]" data-node-id="5867:109201" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Công năng
                            </p>
                            <p className="font-['Inter:Regular'] font-[450] leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="5867:109202" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Trang trí mái cung điện
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="5867:109203" data-name="Guide">
                <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="5867:109204" data-name="Avatar">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-[calc(50%+0.5px)] rounded-[100px] size-[40px] top-1/2" data-node-id="5867:109205" data-name="BG" />
                  <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="5867:109206" data-name="mascot 7 2">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                      <img alt="" className="absolute left-[-43.1%] max-w-none size-[183.51%] top-[-21.05%]" src={imgMascot72} />
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center right-[-7.03px] size-[18.535px] top-[-6px]" data-node-id="5867:109207">
                    <div className="flex-none rotate-10">
                      <div className="bg-[#346888] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                        <div className="absolute inset-[18.78%_37.1%_18.76%_37.5%]" data-node-id="5867:109208">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277056} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Medium_Italic'] font-medium italic leading-[20px] relative shrink-0 text-[#3c2b1e] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="5867:109211" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Bạn có biết?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5802:61462">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[956px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5802:61463">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,0,0,0.8)] h-[956px] relative w-[440px]" data-name="Dimmer" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[7.748px] h-[591px] items-center justify-center left-1/2 p-[7.748px] top-[calc(50%+0.5px)] w-[400px]" data-node-id="5802:61464" data-name="All">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[575.303px] left-[calc(50%+0.02px)] top-[calc(50%+0.47px)] w-[379.661px]" data-node-id="5802:61465" data-name="note">
          <div className="absolute inset-[-3.45%_-5.64%_-3.71%_-7.8%]">
            <img alt="" className="block max-w-none size-full" height="616.544" src={imgNote1} width="430.653" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[348.668px]" data-node-id="5802:61466" data-name="Content">
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-node-id="5802:61467" data-name="Top">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#291d14] text-[40px] text-center tracking-[-1.2px] w-[min-content]" data-node-id="5802:61468" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Đầu chim phượng `}</p>
            <div className="content-stretch flex h-[383px] items-center justify-center relative shrink-0 w-[348px]" data-node-id="5802:61469" data-name="Image frame">
              <div className="flex-1 h-[383.535px] min-w-px relative" data-node-id="5802:61473" data-name="Image">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+1.17px)] top-[calc(50%+0.69px)]" data-node-id="5802:61474">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[#f4f0da] border-[0.545px] border-solid h-[598.59px] left-[calc(50%+1.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.781px_108.227px] mask-size-[329.568px_383.883px] top-[calc(50%+0.68px)] w-[339.202px]" data-node-id="5802:61476" style={{ maskImage: `url("${imgImage560}")` }} data-name="image 560">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-68%] max-w-none top-[5.53%] w-[264.76%]" src={imgImage561} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[61.985px] items-center justify-center px-[20px] relative shrink-0 w-full" data-node-id="5802:61477" data-name="Bottom">
            <div className="[word-break:break-word] content-stretch flex flex-1 flex-col gap-[4px] items-center justify-center leading-[24px] min-w-px not-italic relative text-[16px] tracking-[-0.32px]" data-node-id="5802:61478" data-name="Sp text">
              <p className="font-['Inter:Bold'] font-[650] relative shrink-0 text-[#291d14] w-full" data-node-id="5802:61479" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Bảo tàng lịch sử thành phố Hồ Chí Minh `}</p>
              <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#825e41] w-full" data-node-id="5802:61480" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                13/06/2025
              </p>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="5802:61975" data-name="Avatar">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[76px]" data-node-id="5802:61976" data-name="Vector">
                <div className="absolute inset-[-0.42%_-1.67%_-1.67%_-0.42%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                </div>
              </div>
              <div className="col-1 ml-[4.34px] mt-[4.33px] relative row-1 size-[67.325px]" data-node-id="5802:61977" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
              </div>
              <div className="col-1 ml-[11.48px] mt-[11.56px] relative row-1 size-[52.905px]" data-node-id="5802:61978" data-name="image 726">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-center justify-center left-1/2 pb-[56px] pt-[40px] px-[24px] w-[440px]" data-node-id="5802:61496" data-name="Header">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="5802:61497" data-name="Grouup button">
          <div className="content-stretch flex h-[64px] items-center justify-center px-[9px] relative shrink-0 w-[172px]" data-node-id="5802:61498" data-name="Button">
            <div className="absolute h-[64px] left-0 top-0 w-[171.999px]" data-node-id="5802:61499" data-name="Union">
              <div className="absolute inset-[-2.29%_-1.99%_-5.17%_-0.75%]">
                <img alt="" className="block max-w-none size-full" src={imgUnion4} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[14.857px] leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[22px] text-center tracking-[-0.66px] w-[153.143px]" data-node-id="5802:61503" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              lưu kỉ niệm
            </p>
          </div>
          <div className="content-stretch flex gap-[9.143px] h-[64px] items-center justify-center px-[9.143px] relative shrink-0 w-[172px]" data-node-id="5802:61504" data-name="Button">
            <div className="absolute h-[64px] left-0 top-0 w-[171.999px]" data-node-id="5802:61505" data-name="Union">
              <div className="absolute inset-[-2.29%_-1.99%_-5.17%_-0.75%]">
                <img alt="" className="block max-w-none size-full" src={imgUnion5} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[14.857px] leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[22px] text-center tracking-[-0.66px] w-[153.143px]" data-node-id="5802:61509" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              chia sẻ
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5802:61510" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5802:61511" data-name="Navigation">
          <a className="block cursor-pointer h-[40px] relative shrink-0 w-[76px]" data-node-id="I5802:61511;5415:24248" data-name="Icon Button">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5802:61511;5415:24248;4856:21239" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes2} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5802:61511;5415:24248;4856:21242" data-name="Icon">
              <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5802:61511;5415:24248;4856:21243">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277047} />
              </div>
            </div>
          </a>
          <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="I5802:61511;5415:24251">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5802:61511;5415:24252" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes3} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5802:61511;5415:24255" data-name="Icon">
              <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I5802:61511;5415:24256">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
