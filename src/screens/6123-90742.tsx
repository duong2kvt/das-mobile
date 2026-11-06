const imgShapes = "/das-mobile/assets/0a9a0c6ea47dc137808440a3.svg";
const imgGroup1171277045 = "/das-mobile/assets/2fc564e0ea1a7c07c1292f25.svg";
const imgImage851 = "/das-mobile/assets/67b82c2baed8701f1b895aef.png";
const imgRoundedRectangle12 = "/das-mobile/assets/76e8bc5b72f6961e85d7eb2a.svg";
const imgEllipse1 = "/das-mobile/assets/9dae489814726561bc8c7970.svg";
const imgEllipse3 = "/das-mobile/assets/226efd9296168f0f09131777.svg";
const imgShape10 = "/das-mobile/assets/9cf6426e01e275e30f2d12fa.svg";
const imgShape24 = "/das-mobile/assets/8645a61b4ab9d186c9533093.svg";
const imgShape9 = "/das-mobile/assets/c3ca451b2473bc0340da506d.svg";
const imgShape11 = "/das-mobile/assets/a2b16e59f5b8289bb012be7f.svg";
const imgTypeLocked = "/das-mobile/assets/72a35835bf20370f72632a00.svg";
const imgShapes1 = "/das-mobile/assets/9e20cc373b1c51f53ee39707.svg";
const imgGroup1171277046 = "/das-mobile/assets/c6d616fdcc022d15e1ba926c.svg";
const imgNote = "/das-mobile/assets/6748dd4a07534f13152ba7f4.png";
const imgArtifactImage = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgImage852 = "/das-mobile/assets/2b89b20b1f336dd5f62db900.png";
const imgImage853 = "/das-mobile/assets/ebb7535120f979631a1a8ef6.png";
const imgVector1166Stroke = "/das-mobile/assets/9fea97b1918e341442eaccd5.svg";
const imgGroup427322577 = "/das-mobile/assets/3169808766142c0d0f4eb9ea.svg";
const imgVector1164Stroke = "/das-mobile/assets/f176f7bcc115981abf605b5d.svg";
const imgGroup427322578 = "/das-mobile/assets/81e48f4257ff7b82be8d2f2e.svg";
const imgPattern = "/das-mobile/assets/d7eda09d0f7653575d41c610.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/4e9c73a6d489ad73ab547493.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/9ee7e0213c7000d9ce7c6d57.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/4c453172e31cc51d294490ce.svg";
const imgVector1165 = "/das-mobile/assets/486c4a24883fa141a0dde728.svg";
const imgShape = "/das-mobile/assets/2a06ee52ecd0ef12695ff654.svg";
const imgUnion = "/das-mobile/assets/a5ae51943c0388d16f47fda8.svg";
const imgShape12 = "/das-mobile/assets/f047f47ea39a1bf42dbf5bcb.svg";
const imgShape25 = "/das-mobile/assets/9020f3a070bf07ea0dc5bf3e.svg";
const imgShape13 = "/das-mobile/assets/d19333510614828dbd9b8378.svg";
const imgShape14 = "/das-mobile/assets/f93d78a4ee9391f92438f4b8.svg";
const imgShape15 = "/das-mobile/assets/6cd0127a3434f9eeb8774ae6.svg";
const imgShape26 = "/das-mobile/assets/a28fa3fd31d52208ae5806d0.svg";
const imgShape16 = "/das-mobile/assets/3feabf94c68114e78cf81717.svg";
const imgShape17 = "/das-mobile/assets/886e60ebd3d405988e77b3ad.svg";

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

type MedalProps = {
  className?: string;
  type?: "Locked" | "Purple";
};

function Medal({ className, type = "Purple" }: MedalProps) {
  const isLocked = type === "Locked";
  const isPurple = type === "Purple";
  return (
    <div className={className || "h-[80px] relative w-[96px]"} id={isLocked ? "node-6113_33031" : "node-6113_33032"}>
      {isPurple && (
        <div className="absolute h-[11.734px] left-[6.84px] top-[6.42px] w-[81.377px]" data-node-id="6113:32945" data-name="Rounded Rectangle 12">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoundedRectangle12} />
        </div>
      )}
      <div className={`absolute ${isLocked ? "inset-[0_-1.92%_0_0]" : "h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]"}`} id={isPurple ? "node-6113_32946" : undefined}>
        <img alt="" className={`block max-w-none size-full ${isLocked ? "" : "absolute inset-0"}`} src={isLocked ? imgTypeLocked : imgEllipse1} />
      </div>
      {isPurple && (
        <>
          <div className="absolute h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]" data-node-id="6113:32949">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
          </div>
          <div className="absolute h-[42.772px] left-[20.59px] top-[34.06px] w-[57.822px]" data-node-id="6113:32954" data-name="Shape 10">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape10} />
          </div>
          <div className="absolute h-[42.772px] left-[20.59px] top-[34.05px] w-[57.822px]" data-node-id="6113:32957" data-name="Shape 24">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape24} />
          </div>
          <div className="absolute h-[70.826px] left-[13.97px] top-[3.79px] w-[67.257px]" data-node-id="6113:32964" data-name="Shape 9">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape9} />
          </div>
          <div className="absolute h-[70.826px] left-[14px] top-[4px] w-[67.257px]" data-node-id="6113:32969" data-name="Shape 11">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape11} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[56px] top-1/2" data-node-id="6113:32976" data-name="image 851">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage851} />
          </div>
        </>
      )}
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

export default function Containner() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[24px] relative size-full" data-node-id="6123:90742" data-name="Containner">
      <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0 w-[354px]" data-node-id="6123:90743" data-name="UI layout">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[354px]" data-node-id="6123:90744" data-name="Navigation">
          <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="6123:90746" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="6123:90747" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Hồ sơ
            </p>
          </div>
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
        </div>
        <div className="content-stretch flex flex-col items-center px-[16px] relative shrink-0 w-full" data-node-id="6123:90749" data-name="Content">
          <div className="content-stretch flex flex-col h-[634px] items-center justify-between pb-[24px] pt-[28px] relative shrink-0 w-full" data-node-id="6123:90750" data-name="Meseum Info">
            <div className="-translate-x-1/2 absolute bottom-0 contents left-1/2 top-0" data-node-id="6123:90751" data-name="Note">
              <div className="-translate-x-1/2 absolute aspect-[354/634] bottom-0 left-1/2 top-0" data-node-id="6123:90753" data-name="note">
                <div className="absolute inset-[-0.16%_-1.13%_-0.63%_-0.28%]">
                  <img alt="" className="block max-w-none size-full" height="639" src={imgNote} width="359" />
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] left-[calc(50%+165px)] size-[40px] top-[-16px]" data-node-id="6123:90755" data-name="Badge">
              <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="I6123:90755;4848:33769" data-name="BASE">
                <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
                <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="absolute contents inset-0" data-node-id="I6123:90755;4848:33770">
                <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="I6123:90755;4848:33771" data-name="Vector 1166 (Stroke)">
                  <div className="absolute inset-[-1.92%_-1.89%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
                  </div>
                </div>
                <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
                </div>
                <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="I6123:90755;4848:33773" style={{ containerType: "size" }}>
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
              <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="I6123:90755;4848:33775" data-name="Pattern">
                <div className="absolute inset-[-1%]">
                  <img alt="" className="block max-w-none size-full" src={imgPattern} />
                </div>
              </div>
              <div className="absolute contents inset-[1.1%_50.7%_80.06%_16.84%]" data-node-id="I6123:90755;4848:33776" style={{ containerType: "size" }}>
                <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="I6123:90755;4848:33777" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
                    <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                      <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="I6123:90755;4848:33778" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
                    <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                      <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="I6123:90755;4848:33779" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                    <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                      <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="I6123:90755;4848:33780" style={{ containerType: "size" }}>
                  <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
                    <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
                      <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                        <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="I6123:90755;4848:33781">
                <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector1165} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="6123:90756" data-name="Top">
              <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-node-id="6123:90757" data-name="Profile">
                <div className="h-[164px] relative shrink-0 w-[128px]" data-node-id="6123:90758" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="6123:90760" data-name="Shape">
                    <div className="absolute inset-[-0.27%_-0.7%_-0.55%_-0.35%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#2c79d1] border-[1.248px] border-solid inset-[4.88%_8.33%_5.99%_6.94%]" data-node-id="6123:90763" data-name="Frame border" />
                  <div className="absolute bg-[#2c79d1] inset-[4.89%_8.33%_5.98%_6.94%]" data-node-id="6123:90764" data-name="Tag name" />
                  <div className="-translate-x-1/2 absolute h-[141px] left-[calc(50%-0.5px)] top-[14px] w-[123px]" data-node-id="6123:90765" data-name="Artifact image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[97.49%] left-[6.24%] max-w-none top-[2.31%] w-[86.24%]" src={imgArtifactImage} />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[21.392px] items-end p-[7.131px] right-[9.46px] top-[7.13px] w-[35.653px]" data-node-id="6123:90766" data-name="Text containner">
                    <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] not-italic relative shrink-0 text-[#2c79d1] text-[12.478px] tracking-[-0.2496px] whitespace-nowrap" data-node-id="6123:90767" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      01
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-1 flex-col gap-[16px] items-start min-w-px pt-[12px] relative" data-node-id="6123:90768" data-name="Category list">
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="6123:90769" data-name="Content">
                    <div className="flex flex-1 flex-col font-['Inter:Semi_Bold'] font-semibold justify-end leading-[0] min-w-px relative text-[#291d14] text-[16px] tracking-[-0.32px]" data-node-id="6123:90770" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      <p className="leading-[24px] whitespace-pre-wrap">{`Họ và tên  :  ....................`}</p>
                    </div>
                    <p className="absolute font-['SVN-Kitten:Regular'] leading-[18px] left-[90px] text-[#2c79d1] text-[18px] top-[-1px] tracking-[-0.36px] whitespace-nowrap" data-node-id="6123:90771">
                      Đen Vâu
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="6123:90772" data-name="Content">
                    <div className="flex flex-1 flex-col font-['Inter:Semi_Bold'] font-semibold justify-end leading-[0] min-w-px relative text-[#291d14] text-[16px] tracking-[-0.32px]" data-node-id="6123:90773" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      <p className="leading-[24px] whitespace-pre-wrap">{`Gia nhập  :  .....................`}</p>
                    </div>
                    <p className="absolute font-['SVN-Kitten:Regular'] leading-[18px] left-[85px] text-[#2c79d1] text-[18px] top-[-1px] tracking-[-0.36px] whitespace-nowrap" data-node-id="6123:90774">
                      13/06/2026
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start not-italic relative shrink-0 w-full" data-node-id="6123:90775" data-name="Content">
                    <div className="flex flex-1 flex-col font-['Inter:Semi_Bold'] font-semibold justify-end leading-[0] min-w-px relative text-[#291d14] text-[16px] tracking-[-0.32px]" data-node-id="6123:90776" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      <p className="leading-[24px] whitespace-pre-wrap">{`Cổ vật sở hữu  :  ............`}</p>
                    </div>
                    <p className="absolute font-['SVN-Kitten:Regular'] leading-[18px] left-[122px] text-[#2c79d1] text-[18px] top-[-1px] tracking-[-0.36px] whitespace-nowrap" data-node-id="6123:90777">
                      1/200
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[4.571px] h-[32px] items-center justify-center relative shrink-0 w-[95px]" data-node-id="6123:90778" data-name="Button">
                    <div className="absolute h-[32px] left-0 top-0 w-[94.857px]" data-node-id="6123:90779" data-name="Union">
                      <div className="absolute inset-[-2.68%_-1.72%_-4.85%_-0.58%]">
                        <img alt="" className="block max-w-none size-full" src={imgUnion} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] h-[10px] leading-[normal] min-w-px not-italic relative text-[#291d14] text-[14px] text-center tracking-[-0.28px]" data-node-id="6123:90783" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      Vé của tôi
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="6123:90784" data-name="Achievements">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#291d14] text-[24px] text-center tracking-[-0.72px] w-[min-content]" data-node-id="6123:90785" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                  Thành tựu
                </p>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-node-id="6123:90786" data-name="List">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[322px]" data-node-id="6123:90787" data-name="Row">
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" />
                    <div className="h-[80px] relative shrink-0 w-[96px]" data-node-id="6123:90789" data-name="Medal">
                      <div className="absolute h-[11.734px] left-[6.84px] top-[6.42px] w-[81.377px]" data-node-id="I6123:90789;6113:34764" data-name="Rounded Rectangle 12">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoundedRectangle12} />
                      </div>
                      <div className="absolute h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]" data-node-id="I6123:90789;6113:34765">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                      </div>
                      <div className="absolute h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]" data-node-id="I6123:90789;6113:34768">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
                      </div>
                      <div className="absolute h-[42.772px] left-[20.59px] top-[34.06px] w-[57.822px]" data-node-id="I6123:90789;6113:34773" data-name="Shape 10">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape12} />
                      </div>
                      <div className="absolute h-[42.772px] left-[20.59px] top-[34.05px] w-[57.822px]" data-node-id="I6123:90789;6113:34776" data-name="Shape 24">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape25} />
                      </div>
                      <div className="absolute h-[70.826px] left-[13.97px] top-[3.79px] w-[67.257px]" data-node-id="I6123:90789;6113:34783" data-name="Shape 9">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape13} />
                      </div>
                      <div className="absolute h-[70.826px] left-[14px] top-[4px] w-[67.257px]" data-node-id="I6123:90789;6113:34788" data-name="Shape 11">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape14} />
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[56px] top-1/2" data-node-id="I6123:90789;6113:34795" data-name="image 851">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute left-[1.5%] max-w-none size-[96.43%] top-[1.16%]" src={imgImage852} />
                        </div>
                      </div>
                    </div>
                    <div className="h-[80px] relative shrink-0 w-[96px]" data-node-id="6123:90790" data-name="Medal">
                      <div className="absolute h-[11.734px] left-[6.84px] top-[6.42px] w-[81.377px]" data-node-id="I6123:90790;6113:34829" data-name="Rounded Rectangle 12">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoundedRectangle12} />
                      </div>
                      <div className="absolute h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]" data-node-id="I6123:90790;6113:34830">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
                      </div>
                      <div className="absolute h-[19.01px] left-[0.79px] top-[3.16px] w-[95.05px]" data-node-id="I6123:90790;6113:34833">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} />
                      </div>
                      <div className="absolute h-[42.772px] left-[20.59px] top-[34.06px] w-[57.822px]" data-node-id="I6123:90790;6113:34838" data-name="Shape 10">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape15} />
                      </div>
                      <div className="absolute h-[42.772px] left-[20.59px] top-[34.05px] w-[57.822px]" data-node-id="I6123:90790;6113:34841" data-name="Shape 24">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape26} />
                      </div>
                      <div className="absolute h-[70.826px] left-[13.97px] top-[3.79px] w-[67.257px]" data-node-id="I6123:90790;6113:34848" data-name="Shape 9">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape16} />
                      </div>
                      <div className="absolute h-[70.826px] left-[14px] top-[4px] w-[67.257px]" data-node-id="I6123:90790;6113:34853" data-name="Shape 11">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape17} />
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2px)] size-[56px] top-1/2" data-node-id="I6123:90790;6113:34860" data-name="image 851">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage853} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[322px]" data-node-id="6123:90791" data-name="Row">
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                  </div>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[322px]" data-node-id="6123:90795" data-name="Row">
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                    <Medal className="h-[80px] relative shrink-0 w-[96px]" type="Locked" />
                  </div>
                </div>
              </div>
            </div>
            <Pagination className="content-stretch flex items-center justify-between relative shrink-0 w-[320px]" text="1/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
