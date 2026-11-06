const imgShapes = "/das-mobile/assets/9a56752768fe445df95a08f5.svg";
const imgGroup1171277045 = "/das-mobile/assets/e235aeec17a6b8ba28d46b9a.svg";
const imgImagePlaceholderChangeImageHere = "/das-mobile/assets/62262d9c896b522bdaebe6a1.png";
const imgShapes1 = "/das-mobile/assets/80cd990b5e492c6ccba5202b.svg";
const imgIllustration = "/das-mobile/assets/8ec4923ca78d8ac29636e4dd.svg";
const imgShapes2 = "/das-mobile/assets/97cb61e5e6530cb817efc852.svg";
const imgGroup1171277046 = "/das-mobile/assets/cca5ad8f461e90c6aa6c0d2b.svg";
const imgProfile = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/163ab8757d8be2e1102f766e.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage726 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgNote = "/das-mobile/assets/6748dd4a07534f13152ba7f4.png";
const imgImagePlaceholderChangeImageHere1 = "/das-mobile/assets/d92c6e247e0ba03a2c2fa291.png";
const imgShape = "/das-mobile/assets/3f019f0fcf46b21bb0bada61.svg";
const imgShape1 = "/das-mobile/assets/c6e3e76c878251a2e216d411.svg";
const imgShape2 = "/das-mobile/assets/32495d3a593d3e07ee0266fc.svg";
const imgVector = "/das-mobile/assets/dacf8fd7b7956c07270e00c3.svg";
const imgVector1 = "/das-mobile/assets/36fef38844dbd158f3476bf7.svg";
const imgVector1166Stroke = "/das-mobile/assets/c155831f573476bef2fce8e3.svg";
const imgGroup427322577 = "/das-mobile/assets/ec8dffd52306bbb32a80145f.svg";
const imgVector1164Stroke = "/das-mobile/assets/d5035e06d341d86240eef07e.svg";
const imgGroup427322578 = "/das-mobile/assets/481f50e4d0025da0587b17b8.svg";
const imgPattern = "/das-mobile/assets/d335f7558f554caae52a3b79.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/eb1fa75f1940d6c5208af6c9.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/1ab99ea0c76b4254a8f57ac7.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/156195618820ec4ff5f64b79.svg";
const imgVector1165 = "/das-mobile/assets/dc730140913d40efb3a939db.svg";
const imgUnion = "/das-mobile/assets/2140f93b3093cd9cba76d7aa.svg";
const imgUnion1 = "/das-mobile/assets/5569f577899bf8b2e9328fb5.svg";
const imgUnion2 = "/das-mobile/assets/fe777a1cd0832ba0fe6ef75b.svg";

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

type TicketProps = {
  className?: string;
  type?: "Type3";
};

function Ticket({ className, type = "Type3" }: TicketProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[140px] items-start relative rounded-[var(--corner-radius\\/small,12px)] w-[320px]"} data-node-id="6113:34608">
      <div className="absolute content-stretch flex flex-col inset-0 items-start rounded-[var(--corner-radius\/small,12px)]" data-node-id="6113:34609" data-name="Shapes">
        <div className="absolute inset-[-0.71%_-0.31%]">
          <img alt="" className="block max-w-none size-full" src={imgShapes1} />
        </div>
        <div className="absolute h-[16px] left-0 top-[88px] w-[320px]" data-node-id="6113:34611" data-name="illustration">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllustration} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[40px] items-center justify-between left-1/2 px-[12px] py-[8px] w-[320px]" data-node-id="6113:34617" data-name="Content">
        <div className="absolute bg-[#d8f2ba] content-stretch flex gap-[var(--gap\/2xsmall,4px)] h-[var(--size-24,24px)] items-center justify-center left-[12px] overflow-clip px-[var(--padding\/xsmall,8px)] rounded-[4px] top-[8px]" data-node-id="6113:34677" data-name="Badge">
          <p className="[word-break:break-word] font-['Inter:Regular'] font-[450] leading-[20px] not-italic relative shrink-0 text-[#3f6813] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6113:34679" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            EXP: 30/06/2016
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:SemiBold'] font-semibold leading-[24px] left-[234px] text-[#548a19] text-[16px] top-[8px] tracking-[-0.48px] whitespace-nowrap" data-node-id="6113:34682" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
          Dùng ngay
        </p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="6113:34619" data-name="Content">
        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-px relative" data-node-id="6113:34671" data-name="Details">
          <div className="content-stretch flex gap-[var(--gap\/xsmall,8px)] items-center relative shrink-0 w-full" data-node-id="6113:34672" data-name="Brand">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="6113:34674" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Vé thăm quan bảo tàng
            </p>
          </div>
          <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular'] font-[450] leading-[20px] overflow-hidden relative shrink-0 text-[#291d14] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="6113:34675" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Dùng vé tại bảo tàng Lịch sử Thành phố Hồ Chí Minh
          </p>
        </div>
        <div className="border border-[var(--color\/border\/neutral\/light,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip relative rounded-[var(--corner-radius\/xsmall,8px)] shrink-0 size-[72px]" data-node-id="6113:34683" data-name="Frame">
          <div className="absolute inset-[-1px]" data-node-id="6113:34684" data-name="image-placeholder <- Change image here">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePlaceholderChangeImageHere} />
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
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes2} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="4848:62453" data-name="Icon">
        <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="4848:62454">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="relative size-full" data-node-id="6113:33517" data-name="Profile">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProfile} />
      <div className="absolute h-[820px] left-[-10px] top-[56px] w-[445px]" data-node-id="6113:33518" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[104.51%] left-[-32.11%] max-w-none top-[-4.51%] w-[158.98%]" src={imgBook} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="6113:33519" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I6113:33519;4568:32582" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6113:33519;4568:34365" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6113:33519;4568:34366" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6113:33519;4591:64455" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6113:33519;4568:34397" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6113:33519;4568:34398" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6113:33519;4848:57116" data-name="Icon">
            <div className="absolute flex h-[56.58px] items-center justify-center left-[7.17px] top-[1.88px] w-[52.999px]" data-node-id="I6113:33519;4848:57117">
              <div className="flex-none rotate-30">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I6113:33519;4848:57119" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I6113:33519;4848:57122" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.27%_8.35%_5.99%_6.93%]" data-node-id="I6113:33519;4848:57124" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.34px] text-[#686f2e] text-[3.424px] top-[3.82px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6113:33519;4848:57126" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[52.582px] items-center justify-center left-[2.63px] top-[-1.98px] w-[45.665px]" data-node-id="I6113:33519;4848:57127">
              <div className="flex-none rotate-15">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I6113:33519;4848:57129" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I6113:33519;4848:57132" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.26%_8.34%_6.01%_6.94%]" data-node-id="I6113:33519;4848:57134" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.53px] text-[#2f5f7c] text-[3.424px] top-[3.67px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6113:33519;4848:57136" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[45px] left-[-2.42px] top-[-1.61px] w-[35.218px]" data-node-id="I6113:33519;4848:57137" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I6113:33519;4848:57139" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[1.957px]" data-node-id="I6113:33519;4848:57142" data-name="Frame border">
                <div className="relative shrink-0 size-[29.348px]" data-node-id="I6113:33519;4848:57143" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I6113:33519;4848:57144" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.05px] text-[#b1352a] text-[3.424px] top-[3.8px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I6113:33519;4848:57146" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6113:33519;5131:35287" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6113:33519;5131:35288" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I6113:33519;5131:35758" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I6113:33519;4568:32631" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I6113:33519;4568:32632" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I6113:33519;5964:103581" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[66.857px] top-1/2" data-node-id="I6113:33519;5964:103582" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I6113:33519;5964:103582;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[66.857px] top-0" data-node-id="I6113:33519;5964:103582;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector} />
                  </div>
                </div>
                <div className="absolute left-[3.82px] size-[59.226px] top-[3.81px]" data-node-id="I6113:33519;5964:103582;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute left-[10.1px] size-[46.54px] top-[10.17px]" data-node-id="I6113:33519;5964:103582;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage726} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-[750px] items-start justify-center left-[calc(50%-16px)] pt-[24px] top-[calc(50%-47px)] w-[380px]" data-node-id="6113:33520" data-name="Containner">
        <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-[354px]" data-node-id="6113:33521" data-name="UI layout">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]" data-node-id="6113:33522" data-name="Navigation">
            <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
            <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="6113:33524" data-name="Text containner">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="6113:33525" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                Vé của tôi
              </p>
            </div>
            <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          </div>
          <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="6113:33527" data-name="Content">
            <div className="content-stretch flex flex-col h-[634px] items-center justify-between pb-[24px] pt-[32px] relative shrink-0 w-full" data-node-id="6113:33528" data-name="Meseum Info">
              <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2 top-0" data-node-id="6113:33529" data-name="Note">
                <div className="-translate-x-1/2 absolute aspect-[354/634] bottom-0 left-1/2 top-0" data-node-id="6113:33531" data-name="note">
                  <div className="absolute inset-[-0.16%_-1.13%_-0.63%_-0.28%]">
                    <img alt="" className="block max-w-none size-full" height="639" src={imgNote} width="359" />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] left-[calc(50%+165px)] size-[40px] top-[-16px]" data-node-id="6113:33533" data-name="Badge">
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="I6113:33533;4848:33769" data-name="BASE">
                  <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
                  <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="absolute contents inset-0" data-node-id="I6113:33533;4848:33770">
                  <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="I6113:33533;4848:33771" data-name="Vector 1166 (Stroke)">
                    <div className="absolute inset-[-1.92%_-1.89%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
                    </div>
                  </div>
                  <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
                  </div>
                  <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="I6113:33533;4848:33773" style={{ containerType: "size" }}>
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
                <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="I6113:33533;4848:33775" data-name="Pattern">
                  <div className="absolute inset-[-1%]">
                    <img alt="" className="block max-w-none size-full" src={imgPattern} />
                  </div>
                </div>
                <div className="absolute contents inset-[1.1%_50.69%_80.06%_16.84%]" data-node-id="I6113:33533;4848:33776" style={{ containerType: "size" }}>
                  <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="I6113:33533;4848:33777" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="I6113:33533;4848:33778" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="I6113:33533;4848:33779" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="I6113:33533;4848:33780" style={{ containerType: "size" }}>
                    <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                      <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                        <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="I6113:33533;4848:33781">
                  <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1165} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="6113:34737" data-name="Top">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[24px] text-center tracking-[-0.72px] w-full" data-node-id="6113:34607" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Danh sách vé
                </p>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="6115:34954" data-name="Content">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="6115:34953" data-name="Tab bar">
                    <div className="content-stretch flex gap-[5.224px] h-[32px] items-center justify-center px-[15.673px] relative shrink-0 w-[78px]" data-node-id="6115:34938" data-name="Badge">
                      <div className="absolute h-[32px] left-0 top-0 w-[78.152px]" data-node-id="6115:34939" data-name="Union">
                        <div className="absolute inset-[-3.12%_-2.76%_-6.48%_-1.11%]">
                          <img alt="" className="block max-w-none size-full" src={imgUnion} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#f4f0ed] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6115:34942" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                        Còn hạn
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[5.224px] h-[32px] items-center justify-center px-[15.673px] relative shrink-0 w-[78px]" data-node-id="6115:34943" data-name="Badge">
                      <div className="absolute h-[32px] left-0 top-0 w-[78.152px]" data-node-id="6115:34944" data-name="Union">
                        <div className="absolute inset-[-2.86%_-2.63%_-6.18%_-1.02%]">
                          <img alt="" className="block max-w-none size-full" src={imgUnion1} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#291d14] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6115:34947" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                        Đã dùng
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[5.224px] h-[32px] items-center justify-center px-[15.673px] relative shrink-0 w-[78px]" data-node-id="6115:34948" data-name="Badge">
                      <div className="absolute h-[32px] left-0 top-0 w-[78.152px]" data-node-id="6115:34949" data-name="Union">
                        <div className="absolute inset-[-3.4%_-2.24%_-5.22%_-1.25%]">
                          <img alt="" className="block max-w-none size-full" src={imgUnion2} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic relative shrink-0 text-[#291d14] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="6115:34952" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                        Hết hạn
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="6113:33534" data-name="List">
                    <Ticket className="content-stretch cursor-pointer flex flex-col h-[140px] items-start relative rounded-[var(--corner-radius\/small,12px)] shrink-0 w-[320px]" />
                    <div className="content-stretch flex flex-col h-[140px] items-start relative rounded-[var(--corner-radius\/small,12px)] shrink-0 w-[320px]" data-node-id="6113:34712" data-name="Ticket">
                      <div className="absolute content-stretch flex flex-col inset-0 items-start rounded-[var(--corner-radius\/small,12px)]" data-node-id="I6113:34712;6113:34609" data-name="Shapes">
                        <div className="absolute inset-[-0.71%_-0.31%]">
                          <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                        </div>
                        <div className="absolute h-[16px] left-0 top-[88px] w-[320px]" data-node-id="I6113:34712;6113:34611" data-name="illustration">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllustration} />
                        </div>
                      </div>
                      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[40px] items-center justify-between left-1/2 px-[12px] py-[8px] w-[320px]" data-node-id="I6113:34712;6113:34617" data-name="Content">
                        <div className="absolute bg-[#d8f2ba] content-stretch flex gap-[var(--gap\/2xsmall,4px)] h-[var(--size-24,24px)] items-center justify-center left-[12px] overflow-clip px-[var(--padding\/xsmall,8px)] rounded-[4px] top-[8px]" data-node-id="I6113:34712;6113:34677" data-name="Badge">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-[450] leading-[20px] not-italic relative shrink-0 text-[#3f6813] text-[14px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I6113:34712;6113:34679" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                            EXP: 30/06/2016
                          </p>
                        </div>
                        <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:SemiBold'] font-semibold leading-[24px] left-[234px] text-[#548a19] text-[16px] top-[8px] tracking-[-0.48px] whitespace-nowrap" data-node-id="I6113:34712;6113:34682" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                          Dùng ngay
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[8px] relative shrink-0 w-full" data-node-id="I6113:34712;6113:34619" data-name="Content">
                        <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start min-w-px relative" data-node-id="I6113:34712;6113:34671" data-name="Details">
                          <div className="content-stretch flex gap-[var(--gap\/xsmall,8px)] items-center relative shrink-0 w-full" data-node-id="I6113:34712;6113:34672" data-name="Brand">
                            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#291d14] text-[16px] tracking-[-0.32px] whitespace-nowrap" data-node-id="I6113:34712;6113:34674" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                              Vé thăm quan bảo tàng
                            </p>
                          </div>
                          <p className="[word-break:break-word] font-['IBM_Plex_Sans:Regular'] font-[450] leading-[20px] overflow-hidden relative shrink-0 text-[#291d14] text-[14px] text-ellipsis tracking-[-0.28px] w-full" data-node-id="I6113:34712;6113:34675" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                            Dùng vé tại bảo tàng bảo tàng Chứng tích Chiến tranh
                          </p>
                        </div>
                        <div className="border border-[var(--color\/border\/neutral\/light,#e5e5e5)] border-solid content-stretch flex items-center overflow-clip relative rounded-[var(--corner-radius\/xsmall,8px)] shrink-0 size-[72px]" data-node-id="I6113:34712;6113:34683" data-name="Frame">
                          <div className="absolute inset-[-1px]" data-node-id="I6113:34712;6113:34684" data-name="image-placeholder <- Change image here">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePlaceholderChangeImageHere1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]" text="1/3" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="6113:33578">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
    </div>
  );
}
