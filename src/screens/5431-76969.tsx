const imgUnion = "/das-mobile/assets/337077bc7e7356c3daa09ad0.svg";
const imgUnion1 = "/das-mobile/assets/87ba86b83e8ad5faa1c10d83.svg";
const imgGroup1171277056 = "/das-mobile/assets/72b7a2cb9f4ef2d261cb56d0.svg";
const imgShapes = "/das-mobile/assets/5fe95792144e6dd4d5bbd3e3.svg";
const imgGroup1171277045 = "/das-mobile/assets/18fbf6f2dde4f0d82edfa472.svg";
const imgShapes1 = "/das-mobile/assets/309073aa1f1ccf4c0881736e.svg";
const imgGroup1171277046 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";
const imgMuseumDetails = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/163ab8757d8be2e1102f766e.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage726 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgNote = "/das-mobile/assets/6748dd4a07534f13152ba7f4.png";
const imgImage561 = "/das-mobile/assets/1e3b1629ed36eb95f7e8639e.png";
const imgShape = "/das-mobile/assets/9a23154749e47bf2a44f4543.svg";
const imgShape1 = "/das-mobile/assets/623fa6cb3000c943c7ee5c83.svg";
const imgShape2 = "/das-mobile/assets/a1a1b1e2a3315e422b6fa338.svg";
const imgVector = "/das-mobile/assets/107547f436352ee86018924b.svg";
const imgVector1 = "/das-mobile/assets/b0eafc4855e90f97c889a926.svg";
const imgVector1166Stroke = "/das-mobile/assets/0baedfef7267156bef14dd40.svg";
const imgGroup427322577 = "/das-mobile/assets/9caca6fe5afadcf2ca77e613.svg";
const imgVector1164Stroke = "/das-mobile/assets/023aa760d0fd91f78a0cea1a.svg";
const imgGroup427322578 = "/das-mobile/assets/3c7513a2956a442672e5674f.svg";
const imgPattern = "/das-mobile/assets/2fb884bae304df42670ee7ee.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/7bc454ad75d0ced91d739b76.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/0862de49e702b3ee8b80646f.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/7c7419ac3fcc840eb4434cd7.svg";
const imgVector1165 = "/das-mobile/assets/156bef6b27c429eb1f6685ee.svg";
const imgImage560 = "/das-mobile/assets/8a65053931b28442b9a51c3f.svg";
const imgUnion2 = "/das-mobile/assets/0fb0bc032fefc38c54b83b90.svg";
const imgGroup1171277055 = "/das-mobile/assets/ff8b5eebad39f56bbd55b482.svg";
const imgUnion3 = "/das-mobile/assets/d0998181c50fa1f9bc4c58e5.svg";
const imgGroup1171277057 = "/das-mobile/assets/2303eb2d7b53a00528f2d250.svg";
const imgUnion4 = "/das-mobile/assets/661f582b82f7764b3cde5564.svg";
const imgGroup1171277054 = "/das-mobile/assets/a6b5a34a614835988e49317a.svg";

type ButtonProps = {
  className?: string;
  highEmphasis?: "False";
  state?: "Default";
  type?: "Neutral";
  witchIcon?: "True";
};

function Button({ className, highEmphasis = "False", state = "Default", type = "Neutral", witchIcon = "True" }: ButtonProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] h-[56px] items-center px-[24px] relative w-[150px]"} data-node-id="4936:14602">
      <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="4936:14592" data-name="Union">
        <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
          <img alt="" className="block max-w-none size-full" src={imgUnion} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-node-id="4936:14595" data-name="Icon Badge">
        <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I4936:14595;4856:23156">
          <div className="-rotate-90 flex-none">
            <div className="relative size-[24px]" data-name="Union">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion1} />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I4936:14595;4856:23169" data-name="Icon/Info">
          <div className="absolute inset-[8.33%_32.8%_8.34%_33.33%]" data-node-id="I4936:14595;4856:23169;4856:22822">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277056} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="4936:14596" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        Thông tin
      </p>
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

type NavigationProps = {
  className?: string;
  centar?: "False";
  light?: "False";
};

function Navigation({ className, centar = "False", light = "False" }: NavigationProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[354px]"} data-node-id="5415:24274">
      <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
      <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="5415:24230" data-name="Text containner">
        <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5415:24231" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
          Thông tin bảo tàng
        </p>
      </div>
      <div className="opacity-0 relative shrink-0 size-[40px]" data-node-id="5415:24232">
        <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5415:24233" data-name="Shapes">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="5415:24236" data-name="Icon">
          <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="5415:24237">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MuseumDetails() {
  return (
    <div className="relative size-full" data-node-id="5431:76969" data-name="Museum details">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMuseumDetails} />
      <div className="absolute h-[820px] left-[-10px] top-[56px] w-[445px]" data-node-id="5431:76970" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.51%] left-[-32.11%] max-w-none top-[-4.51%] w-[158.98%]" src={imgBook} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="5431:76971" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I5431:76971;4568:31676" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:76971;4568:31677" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:76971;4568:31678" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I5431:76971;4591:64448" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:76971;4568:31692" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:76971;4568:31693" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:76971;4847:20305" data-name="Icon">
            <div className="absolute flex h-[56.58px] items-center justify-center left-[7.17px] top-[1.88px] w-[52.999px]" data-node-id="I5431:76971;4847:20306">
              <div className="flex-none rotate-30">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5431:76971;4847:20308" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:76971;4847:20311" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.27%_8.35%_5.99%_6.93%]" data-node-id="I5431:76971;4847:20313" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.34px] text-[#686f2e] text-[3.424px] top-[3.82px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:76971;4847:20315" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[52.582px] items-center justify-center left-[2.63px] top-[-1.98px] w-[45.665px]" data-node-id="I5431:76971;4847:20316">
              <div className="flex-none rotate-15">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5431:76971;4847:20318" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:76971;4847:20321" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.26%_8.34%_6.01%_6.94%]" data-node-id="I5431:76971;4847:20323" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.53px] text-[#2f5f7c] text-[3.424px] top-[3.67px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:76971;4847:20325" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[45px] left-[-2.42px] top-[-1.61px] w-[35.218px]" data-node-id="I5431:76971;4847:20326" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I5431:76971;4847:20328" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:76971;4847:20331" data-name="Frame border">
                <div className="relative shrink-0 size-[29.348px]" data-node-id="I5431:76971;4847:20332" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I5431:76971;4847:20333" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.05px] text-[#b1352a] text-[3.424px] top-[3.8px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:76971;4847:20335" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:76971;5131:35069" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:76971;5131:35070" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:76971;5131:35303" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:76971;5961:95100" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:76971;5961:95101" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:76971;5961:98755" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="I5431:76971;5961:98756" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I5431:76971;5961:98756;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[52px] top-0" data-node-id="I5431:76971;5961:98756;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="absolute left-[2.97px] size-[46.065px] top-[2.96px]" data-node-id="I5431:76971;5961:98756;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute left-[7.85px] size-[36.198px] top-[7.91px]" data-node-id="I5431:76971;5961:98756;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[750px] items-start justify-center left-[calc(50%-16px)] pt-[24px] top-[calc(50%-47px)] w-[380px]" data-node-id="5431:76972" data-name="Containner">
        <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-[354px]" data-node-id="5431:76973" data-name="UI layout">
          <Navigation className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]" />
          <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="5431:76975" data-name="Content">
            <div className="content-stretch flex flex-col gap-[32px] h-[634px] items-center pb-[28px] pt-[32px] px-[16px] relative shrink-0 w-full" data-node-id="5431:76976" data-name="Meseum Info">
              <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2 top-0" data-node-id="5431:76977" data-name="Note">
                <div className="-translate-x-1/2 absolute aspect-[354/634] bottom-0 left-1/2 top-0" data-node-id="5431:76979" data-name="note">
                  <div className="absolute inset-[-0.16%_-1.13%_-0.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" height="639" src={imgNote} width="359" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] left-[calc(50%+165px)] size-[40px] top-[-16px]" data-node-id="5431:76981" data-name="Badge">
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="I5431:76981;4848:33769" data-name="BASE">
                  <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="absolute contents inset-0" data-node-id="I5431:76981;4848:33770">
                  <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="I5431:76981;4848:33771" data-name="Vector 1166 (Stroke)">
                    <div className="absolute inset-[-1.92%_-1.89%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
                    </div>
                  </div>
                  <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
                  </div>
                  <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="I5431:76981;4848:33773" style={{ containerType: "size" }}>
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
                <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="I5431:76981;4848:33775" data-name="Pattern">
                  <div className="absolute inset-[-1%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern} />
                  </div>
                </div>
                <div className="absolute contents inset-[1.1%_50.69%_80.06%_16.84%]" data-node-id="I5431:76981;4848:33776" style={{ containerType: "size" }}>
                  <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="I5431:76981;4848:33777" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="I5431:76981;4848:33778" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="I5431:76981;4848:33779" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="I5431:76981;4848:33780" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="I5431:76981;4848:33781">
                  <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1165} />
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[1.2] not-italic relative shrink-0 text-[#291d14] text-[24px] text-center tracking-[-0.72px] w-[271px]" data-node-id="5431:76982" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Bảo tàng lịch sử thành phố Hồ chí minh `}</p>
              <div className="content-stretch flex gap-[12px] h-[309px] items-center justify-center relative shrink-0 w-[320px]" data-node-id="5431:76983" data-name="Image frame">
                <div className="flex-1 h-[240px] min-w-px relative" data-node-id="5431:76987" data-name="Image">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-9px)]" data-node-id="5431:76988">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute border-[#f4f0da] border-[0.5px] border-solid h-[549.372px] left-[calc(50%+0.8px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-17.582px_107.289px] mask-size-[334.645px_336.289px] top-[calc(50%-9.96px)] w-[311.312px]" data-node-id="5431:76990" style={{ maskImage: `url("${imgImage560}")` }} data-name="image 560">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[134.05%] left-0 max-w-none top-[-0.1%] w-full" src={imgImage561} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-start cursor-pointer flex flex-wrap gap-[32px_16px] items-start justify-center relative shrink-0 w-[322px]" data-node-id="5431:76991" data-name="Category list">
                <Button className="content-stretch flex gap-[8px] h-[56px] items-center px-[24px] relative shrink-0 w-[150px]" />
                <a className="content-stretch flex gap-[8px] h-[56px] items-center px-[24px] relative shrink-0 w-[150px]" data-node-id="5431:76993" data-name="Button">
                  <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="I5431:76993;4936:14592" data-name="Union">
                    <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgUnion} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-node-id="I5431:76993;4936:14595" data-name="Icon Badge">
                    <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5431:76993;4936:14595;4856:23057">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[24px]" data-name="Union">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion2} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5431:76993;4936:14595;4856:23430" data-name="Icon/Histoty">
                      <div className="absolute inset-[8.33%_5.09%_8.33%_4.17%]" data-node-id="I5431:76993;4936:14595;4856:23430;4856:22816">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277055} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] text-left tracking-[-0.32px] whitespace-nowrap" data-node-id="I5431:76993;4936:14596" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    Lịch sử
                  </p>
                </a>
                <a className="content-stretch flex gap-[8px] h-[56px] items-center px-[24px] relative shrink-0 w-[150px]" data-node-id="5431:76994" data-name="Button">
                  <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="I5431:76994;4936:14592" data-name="Union">
                    <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgUnion} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-node-id="I5431:76994;4936:14595" data-name="Icon Badge">
                    <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5431:76994;4936:14595;4856:23239">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[24px]" data-name="Union">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion3} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5431:76994;4936:14595;4856:23244" data-name="Icon/Artifact">
                      <div className="absolute inset-[12.5%_4.17%]" data-node-id="I5431:76994;4936:14595;4856:23244;4856:22835">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277057} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] text-left tracking-[-0.32px] whitespace-nowrap" data-node-id="I5431:76994;4936:14596" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    Cổ vật
                  </p>
                </a>
                <a className="content-stretch flex gap-[8px] h-[56px] items-center px-[24px] relative shrink-0 w-[150px]" data-node-id="5431:76995" data-name="Button">
                  <div className="absolute h-[56px] left-0 top-0 w-[150px]" data-node-id="I5431:76995;4936:14592" data-name="Union">
                    <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
                      <img alt="" className="block max-w-none size-full" src={imgUnion} />
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-node-id="I5431:76995;4936:14595" data-name="Icon Badge">
                    <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" data-node-id="I5431:76995;4936:14595;4856:23104">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[24px]" data-name="Union">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUnion4} />
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[13.5px] top-1/2" data-node-id="I5431:76995;4936:14595;4856:23394" data-name="Icon/museum">
                      <div className="absolute inset-[8.33%_6.41%_8.37%_8.33%]" data-node-id="I5431:76995;4936:14595;4856:23394;4856:22788">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277054} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] text-left tracking-[-0.32px] whitespace-nowrap" data-node-id="I5431:76995;4936:14596" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    Kiến trúc
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5431:76996">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
    </div>
  );
}
