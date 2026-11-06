const imgShapes = "/das-mobile/assets/9dbbb0949c32eb531066e5f0.svg";
const imgGroup1171277045 = "/das-mobile/assets/ab1c2cbb618d150aa669dc58.svg";
const imgPaperTape07 = "/das-mobile/assets/f6ba834236a37f4cd178dd8e.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgMascot72 = "/das-mobile/assets/6c9a059f6231b5fcd4eebd21.png";
const imgSubtract = "/das-mobile/assets/d43a2c74d0d95920d1da1a94.svg";
const imgImage = "/das-mobile/assets/20a59de487b76d1aa8cc4062.svg";
const imgGroup1171277077 = "/das-mobile/assets/32aee1991ef7e80a4cdeadca.svg";
const imgShapes1 = "/das-mobile/assets/aa76910e367a00a28d8dc273.svg";
const imgGroup1171277046 = "/das-mobile/assets/066bef77b251d5750761eec2.svg";
const imgMascotGuideAnimate = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/163ab8757d8be2e1102f766e.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage726 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgArtifactImage1 = "/das-mobile/assets/5f6e7a1b06560f9dd20f90ea.png";
const imgArtifactImage2 = "/das-mobile/assets/416e830295c78a31ac621daa.png";
const imgMascot13 = "/das-mobile/assets/684b6b70125ccda24007c258.png";
const imgUnion = "/das-mobile/assets/f095c5fd2e0f353790721405.png";
const imgShape = "/das-mobile/assets/111367d83990d7a3309a89e7.svg";
const imgShape1 = "/das-mobile/assets/a12b250f83107c3f20cf5af1.svg";
const imgShape2 = "/das-mobile/assets/a120585573b65894b32ebb9e.svg";
const imgVector = "/das-mobile/assets/6347172db120d3139b9152f2.svg";
const imgVector1 = "/das-mobile/assets/b0eafc4855e90f97c889a926.svg";
const imgShapes2 = "/das-mobile/assets/0bfde09cf3cbd5e124094871.svg";
const imgGroup1171277047 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";
const imgImage1 = "/das-mobile/assets/c8133c3152b8202b02999437.svg";
const imgLight = "/das-mobile/assets/8c9a7612245d32dad4b2b9bf.svg";
const imgVector1186 = "/das-mobile/assets/0cb315675d2bb85fdfc1e28a.svg";
const imgVector1171 = "/das-mobile/assets/b13579fee598eee7eee10c29.svg";
const imgIconInteract = "/das-mobile/assets/52ca1c8573e89e8f9eb01b65.svg";

type PaginationProps = {
  className?: string;
  position?: "Right";
  text?: string;
};

function Pagination({ className, position = "Right", text = "1/5" }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[320px]"} data-node-id="5113:53308">
      <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="5113:53291" data-name="Icon Button">
        <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5113:53291;4856:21247" data-name="Shapes">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5113:53291;4856:21250" data-name="Icon">
          <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5113:53291;4856:21251">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-1 font-['Inter:Semi_Bold'] font-semibold leading-[24px] min-w-px not-italic relative text-[#291d14] text-[16px] text-center tracking-[-0.32px]" data-node-id="5113:53292" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        {text}
      </p>
      <div className="flex items-center justify-center relative shrink-0" data-node-id="5113:53293">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5113:53293;4856:21239" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5113:53293;4856:21242" data-name="Icon">
              <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5113:53293;4856:21243">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ArtifactCardProps = {
  className?: string;
  lessText?: "True";
  shape?: "Horizontal";
};

function ArtifactCard({ className, lessText = "True", shape = "Horizontal" }: ArtifactCardProps) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[8px] h-[152px] items-center pt-[16px] px-[18px] relative w-[354px]"} data-node-id="5113:44711">
      <div className="absolute h-[152px] left-0 top-0 w-[354px]" data-node-id="5113:44494" data-name="Subtract">
        <div className="absolute inset-[-0.66%_-1.13%_-2.63%_-0.28%]">
          <img alt="" className="block max-w-none size-full" src={imgSubtract} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-[318px]" data-node-id="5113:44512" data-name="Alli nfo">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="5113:44513" data-name="Bottom">
          <div className="relative shrink-0 size-[122px]" data-node-id="5113:44514" data-name="Image Frame">
            <div className="absolute flex items-center justify-center left-[1.58px] size-[119.811px] top-[0.41px]" data-node-id="5113:44515">
              <div className="-rotate-3 flex-none">
                <div className="h-[114.001px] relative w-[114px]" data-name="Image">
                  <div className="absolute inset-[-0.51%_-1.32%_-0.72%_-1.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[29.471px] items-center justify-center left-[-6px] top-0 w-[31.233px]" data-node-id="5113:44525">
              <div className="flex-none rotate-[138.4deg]">
                <div className="h-[11px] relative w-[32px]" data-name="Paper Tape_07">
                  <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgPaperTape07} />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[96px] top-[calc(50%-1px)]" data-node-id="5113:44528" data-name="Artifact image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
            </div>
          </div>
          <div className="content-stretch flex flex-1 flex-col gap-[20px] items-start min-w-px pt-[12px] relative self-stretch" data-node-id="5113:44529" data-name="Top">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 whitespace-nowrap" data-node-id="5113:44530" data-name="Text">
              <p className="font-['Young_Display_Bold:Bold'] leading-[normal] relative shrink-0 text-[#291d14] text-[20px] tracking-[-0.6px]" data-node-id="5113:44531" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Đầu chim phượng `}</p>
              <p className="font-['Inter:Medium'] font-medium leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="5113:44532" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Thời Nhà Trần (Thế kỷ 13–14)
              </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="5113:44560">
              <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="5113:44561" data-name="Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-1/2 rounded-[100px] size-[40px] top-1/2" data-node-id="5113:44562" data-name="BG" />
                <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="5113:44563" data-name="mascot 7 2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                    <img alt="" className="absolute left-[-34.93%] max-w-none size-[169.21%] top-[-17.05%]" src={imgMascot72} />
                  </div>
                </div>
                <div className="absolute flex items-center justify-center right-[-6.54px] size-[18.535px] top-[-6px]" data-node-id="5113:44564">
                  <div className="flex-none rotate-10">
                    <div className="bg-[#cf6158] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                      <div className="absolute inset-[17.65%_30.22%_17.73%_33.78%]" data-node-id="5113:44565">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277077} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] flex-1 font-['Inter:Medium_Italic'] font-medium italic leading-[20px] min-w-px relative text-[#3c2b1e] text-[14px] tracking-[-0.28px]" data-node-id="5113:44568" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Làm sao săn được cổ vật này?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type IconButtonProps = {
  className?: string;
  light?: boolean;
  type?: "Left";
};

function IconButton({ className, light = false, type = "Left" }: IconButtonProps) {
  return (
    <div className={className || "h-[40px] relative w-[76px]"} data-node-id="4856:22055">
      <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="4848:62450" data-name="Shapes">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="4848:62453" data-name="Icon">
        <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="4848:62454">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
        </div>
      </div>
    </div>
  );
}

export default function MascotGuideAnimate() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5798:55728" data-name="Mascot guide + Animate">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMascotGuideAnimate} />
      <div className="absolute h-[820px] left-[-10px] top-[56px] w-[445px]" data-node-id="5798:55729" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.51%] left-[-32.11%] max-w-none top-[-4.51%] w-[158.98%]" src={imgBook} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="5798:55730" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I5798:55730;4568:31676" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5798:55730;4568:31677" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5798:55730;4568:31678" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I5798:55730;4591:64448" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5798:55730;4568:31692" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5798:55730;4568:31693" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5798:55730;4847:20305" data-name="Icon">
            <div className="absolute flex h-[56.58px] items-center justify-center left-[7.17px] top-[1.88px] w-[52.999px]" data-node-id="I5798:55730;4847:20306">
              <div className="flex-none rotate-30">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5798:55730;4847:20308" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5798:55730;4847:20311" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.27%_8.35%_5.99%_6.93%]" data-node-id="I5798:55730;4847:20313" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.34px] text-[#686f2e] text-[3.424px] text-left top-[3.82px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5798:55730;4847:20315" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[52.582px] items-center justify-center left-[2.63px] top-[-1.98px] w-[45.665px]" data-node-id="I5798:55730;4847:20316">
              <div className="flex-none rotate-15">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5798:55730;4847:20318" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5798:55730;4847:20321" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.26%_8.34%_6.01%_6.94%]" data-node-id="I5798:55730;4847:20323" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.53px] text-[#2f5f7c] text-[3.424px] text-left top-[3.67px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5798:55730;4847:20325" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[45px] left-[-2.42px] top-[-1.61px] w-[35.218px]" data-node-id="I5798:55730;4847:20326" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I5798:55730;4847:20328" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[1.957px]" data-node-id="I5798:55730;4847:20331" data-name="Frame border">
                <div className="relative shrink-0 size-[29.348px]" data-node-id="I5798:55730;4847:20332" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I5798:55730;4847:20333" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.05px] text-[#b1352a] text-[3.424px] text-left top-[3.8px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5798:55730;4847:20335" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5798:55730;5131:35069" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5798:55730;5131:35070" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5798:55730;5131:35303" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5798:55730;5961:95100" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5798:55730;5961:95101" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5798:55730;5961:98755" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="I5798:55730;5961:98756" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I5798:55730;5961:98756;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[52px] top-0" data-node-id="I5798:55730;5961:98756;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="absolute left-[2.97px] size-[46.065px] top-[2.96px]" data-node-id="I5798:55730;5961:98756;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute left-[7.85px] size-[36.198px] top-[7.91px]" data-node-id="I5798:55730;5961:98756;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[750px] items-start justify-center left-[calc(50%-16px)] pt-[24px] top-[calc(50%-47px)] w-[380px]" data-node-id="5798:55731" data-name="Containner">
        <div className="content-stretch flex flex-col gap-[32px] h-full items-end relative shrink-0 w-[354px]" data-node-id="5798:55732" data-name="UI layout">
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-node-id="5798:55733" data-name="Navigation">
            <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
            <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="5798:55735" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5798:55736" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Thông tin bảo tàng
              </p>
            </div>
            <div className="opacity-0 relative shrink-0 size-[40px]" data-node-id="5798:55737">
              <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5798:55738" data-name="Shapes">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes2} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="5798:55741" data-name="Icon">
                <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="5798:55742">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277047} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-1 flex-col items-center justify-between min-h-px pb-[20px] relative w-full" data-node-id="5798:55746" data-name="Content">
            <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[360px]" data-node-id="5798:55747" data-name="List">
              <ArtifactCard className="content-stretch flex flex-col gap-[8px] h-[152px] items-center pt-[16px] px-[18px] relative shrink-0 w-full" />
              <div className="content-stretch flex flex-col gap-[8px] h-[152px] items-center pt-[16px] px-[18px] relative shrink-0 w-full" data-node-id="5798:55749" data-name="Artifact Card">
                <div className="absolute h-[152px] left-0 top-0 w-[354px]" data-node-id="I5798:55749;5113:44494" data-name="Subtract">
                  <div className="absolute inset-[-0.66%_-1.13%_-2.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" src={imgSubtract} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-[318px]" data-node-id="I5798:55749;5113:44512" data-name="Alli nfo">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I5798:55749;5113:44513" data-name="Bottom">
                    <div className="relative shrink-0 size-[122px]" data-node-id="I5798:55749;5113:44514" data-name="Image Frame">
                      <div className="absolute flex items-center justify-center left-[1.58px] size-[119.811px] top-[0.41px]" data-node-id="I5798:55749;5113:44515">
                        <div className="-rotate-3 flex-none">
                          <div className="relative size-[114.001px]" data-name="Image">
                            <div className="absolute inset-[-0.51%_-1.32%_-0.72%_-1.32%]">
                              <img alt="" className="block max-w-none size-full" src={imgImage1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex h-[29.471px] items-center justify-center left-[-6px] top-0 w-[31.233px]" data-node-id="I5798:55749;5113:44525">
                        <div className="flex-none rotate-[138.4deg]">
                          <div className="h-[11px] relative w-[32px]" data-name="Paper Tape_07">
                            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgPaperTape07} />
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[96px] top-[calc(50%-1px)]" data-node-id="I5798:55749;5113:44528" data-name="Artifact image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage1} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-1 flex-col gap-[20px] items-start min-w-px pt-[12px] relative self-stretch" data-node-id="I5798:55749;5113:44529" data-name="Top">
                      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-left whitespace-nowrap" data-node-id="I5798:55749;5113:44530" data-name="Text">
                        <p className="font-['Young_Display_Bold:Bold'] leading-[normal] relative shrink-0 text-[#291d14] text-[20px] tracking-[-0.6px]" data-node-id="I5798:55749;5113:44531" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Gạch trang trí
                        </p>
                        <p className="font-['Inter:Medium'] font-medium leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="I5798:55749;5113:44532" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Thời Nhà Trần (Thế kỷ 13–14)
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="I5798:55749;5113:44560">
                        <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="I5798:55749;5113:44561" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-1/2 rounded-[100px] size-[40px] top-1/2" data-node-id="I5798:55749;5113:44562" data-name="BG" />
                          <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="I5798:55749;5113:44563" data-name="mascot 7 2">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                              <img alt="" className="absolute left-[-34.93%] max-w-none size-[169.21%] top-[-17.05%]" src={imgMascot72} />
                            </div>
                          </div>
                          <div className="absolute flex items-center justify-center right-[-6.54px] size-[18.535px] top-[-6px]" data-node-id="I5798:55749;5113:44564">
                            <div className="flex-none rotate-10">
                              <div className="bg-[#cf6158] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                                <div className="absolute inset-[17.65%_30.22%_17.73%_33.78%]" data-node-id="I5798:55749;5113:44565">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277077} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="[word-break:break-word] flex-1 font-['Inter:Medium_Italic'] font-medium italic leading-[20px] min-w-px relative text-[#3c2b1e] text-[14px] text-left tracking-[-0.28px]" data-node-id="I5798:55749;5113:44568" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Làm sao săn được cổ vật này?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] h-[152px] items-center pt-[16px] px-[18px] relative shrink-0 w-full" data-node-id="5798:55750" data-name="Artifact Card">
                <div className="absolute h-[152px] left-0 top-0 w-[354px]" data-node-id="I5798:55750;5113:44494" data-name="Subtract">
                  <div className="absolute inset-[-0.66%_-1.13%_-2.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" src={imgSubtract} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-[318px]" data-node-id="I5798:55750;5113:44512" data-name="Alli nfo">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="I5798:55750;5113:44513" data-name="Bottom">
                    <div className="relative shrink-0 size-[122px]" data-node-id="I5798:55750;5113:44514" data-name="Image Frame">
                      <div className="absolute flex items-center justify-center left-[1.58px] size-[119.811px] top-[0.41px]" data-node-id="I5798:55750;5113:44515">
                        <div className="-rotate-3 flex-none">
                          <div className="relative size-[114.001px]" data-name="Image">
                            <div className="absolute inset-[-0.51%_-1.32%_-0.72%_-1.32%]">
                              <img alt="" className="block max-w-none size-full" src={imgImage1} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex h-[29.471px] items-center justify-center left-[-6px] top-0 w-[31.233px]" data-node-id="I5798:55750;5113:44525">
                        <div className="flex-none rotate-[138.4deg]">
                          <div className="h-[11px] relative w-[32px]" data-name="Paper Tape_07">
                            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgPaperTape07} />
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[96px] top-[calc(50%-1px)]" data-node-id="I5798:55750;5113:44528" data-name="Artifact image">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-[82.79%] left-[0.62%] max-w-none top-[8.55%] w-[98.76%]" src={imgArtifactImage2} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-1 flex-col gap-[20px] items-start min-w-px pt-[12px] relative self-stretch" data-node-id="I5798:55750;5113:44529" data-name="Top">
                      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-left whitespace-nowrap" data-node-id="I5798:55750;5113:44530" data-name="Text">
                        <p className="font-['Young_Display_Bold:Bold'] leading-[normal] relative shrink-0 text-[#291d14] text-[20px] tracking-[-0.6px]" data-node-id="I5798:55750;5113:44531" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Tượng vịt
                        </p>
                        <p className="font-['Inter:Medium'] font-medium leading-[20px] relative shrink-0 text-[#664932] text-[14px] tracking-[-0.28px]" data-node-id="I5798:55750;5113:44532" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Thời Nhà Trần (Thế kỷ 13–14)
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="I5798:55750;5113:44560">
                        <div className="bg-[#f5d558] content-stretch flex flex-col items-center justify-center relative rounded-[181.818px] shrink-0 size-[40px]" data-node-id="I5798:55750;5113:44561" data-name="Avatar">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5d558] left-1/2 rounded-[100px] size-[40px] top-1/2" data-node-id="I5798:55750;5113:44562" data-name="BG" />
                          <div className="relative rounded-[100px] shrink-0 size-[34px]" data-node-id="I5798:55750;5113:44563" data-name="mascot 7 2">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
                              <img alt="" className="absolute left-[-34.93%] max-w-none size-[169.21%] top-[-17.05%]" src={imgMascot72} />
                            </div>
                          </div>
                          <div className="absolute flex items-center justify-center right-[-6.54px] size-[18.535px] top-[-6px]" data-node-id="I5798:55750;5113:44564">
                            <div className="flex-none rotate-10">
                              <div className="bg-[#cf6158] overflow-clip relative rounded-[333.333px] size-[16px]" data-name="Icon/Question mark">
                                <div className="absolute inset-[17.65%_30.22%_17.73%_33.78%]" data-node-id="I5798:55750;5113:44565">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277077} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="[word-break:break-word] flex-1 font-['Inter:Medium_Italic'] font-medium italic leading-[20px] min-w-px relative text-[#3c2b1e] text-[14px] text-left tracking-[-0.28px]" data-node-id="I5798:55750;5113:44568" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Làm sao săn được cổ vật này?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Pagination className="content-stretch flex items-center justify-between relative shrink-0 w-full" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[956px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5798:55752">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,0,0,0.8)] h-[956px] relative w-[440px]" data-name="Dimmer" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[275px] size-[119.464px] top-[581px]" data-node-id="5798:55753">
        <div className="flex-none rotate-[9.32deg]">
          <div className="relative size-[104px]" data-name="Artifact">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-0.01px)]" data-node-id="5798:55754" data-name="Reward effect">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[201.02px] top-[calc(50%-0.01px)]" data-node-id="5798:55755">
                <div className="flex-none rotate-[-9.32deg]">
                  <div className="relative size-[175px]" data-name="Light effect">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.5px)] mix-blend-plus-lighter size-[175px] top-[calc(50%-0.5px)]" data-node-id="I5798:55755;5410:24709" data-name="Líght">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLight} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute aspect-[96/96] bottom-[-11.23%] contents left-[-13.48px] top-[-11.25%]" data-node-id="5798:55788">
              <div className="absolute aspect-[127.37346506118774/127.37346506118774] bottom-[-11.23%] flex items-center justify-center left-[-13.48px] top-[-11.25%]" data-node-id="5798:55789" style={{ containerType: "size" }}>
                <div className="flex-none h-[hypot(-21.1325cqw,78.8675cqh)] rotate-15 w-[hypot(78.8675cqw,21.1325cqh)]">
                  <div className="relative size-full" data-name="Artifact image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5798:55790">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[419px] left-[calc(50%-0.5px)] top-[497px] w-[371px]" data-node-id="5798:56350" data-name="Mascot Guide">
        <div className="absolute flex h-[345.648px] items-center justify-center left-[-49px] top-0 w-[352.254px]" data-node-id="5798:56351">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[345.648px] relative w-[352.254px]" data-name="mascot 1 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[137.47%] left-[-17.27%] max-w-none top-[-20.94%] w-[134.9%]" src={imgMascot13} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="5798:56352">
          <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="5798:56353" data-name="Name tag">
            <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="5798:56354">
              <div className="flex-none rotate-[-1.28deg]">
                <div className="h-[43.191px] relative w-[158.121px]">
                  <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="5798:56355">
              <div className="flex-none rotate-[-0.98deg]">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="5798:56356" data-name="Box chat">
            <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="5798:56357">
              <div className="absolute inset-[-0.69%_-0.28%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1171} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="5798:56358" data-name="Content">
              <div className="absolute h-[153.288px] left-0 top-0 w-[370.829px]" data-node-id="5798:56359" data-name="Union">
                <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                  <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
                </div>
              </div>
              <div className="content-stretch flex h-[107.532px] items-start justify-center p-[8px] relative shrink-0 w-[336.781px]" data-node-id="5798:56361" data-name="Text">
                <div className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[0] min-w-px not-italic relative text-[#3c2b1e] text-[20px] text-left whitespace-pre-wrap" data-node-id="5798:56362">
                  <p className="leading-[1.4] mb-0">{`Muốn săn cổ vật này hả? `}</p>
                  <p className="leading-[1.4]">Siêu dễ!</p>
                </div>
              </div>
              <div className="absolute h-[19px] left-[333px] top-[128px] w-[18px]" data-node-id="5798:56363" data-name="Icon Interact">
                <div className="absolute inset-[-2.63%_-5.56%_0_-2.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgIconInteract} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
