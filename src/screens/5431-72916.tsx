const imgShapes = "/das-mobile/assets/051ca7c86ffbc169ce2294b4.svg";
const imgGroup1171277045 = "/das-mobile/assets/8645d938394741b3248eb85f.svg";
const imgVector1166Stroke = "/das-mobile/assets/2a9041264026acb11f135a66.svg";
const imgGroup427322577 = "/das-mobile/assets/6758abf270af51f211b2050f.svg";
const imgVector1164Stroke = "/das-mobile/assets/5557ee28718404959bfcc1d7.svg";
const imgGroup427322578 = "/das-mobile/assets/65ccb89951cbe3b12ec760a7.svg";
const imgPattern = "/das-mobile/assets/7de969263e467047c06a8583.svg";
const imgVector1164Stroke1 = "/das-mobile/assets/d1807a3f2dc5a02d4bad465f.svg";
const imgVector1164Stroke2 = "/das-mobile/assets/fc3f122b8556494187e745fb.svg";
const imgVector1164Stroke3 = "/das-mobile/assets/6dad5f3fe074946e7dda03e1.svg";
const imgVector1165 = "/das-mobile/assets/b584fff0b1e7e4dc4f50f2d5.svg";
const imgUnion = "/das-mobile/assets/f02350fbc9326666c0b42a27.png";
const imgVector = "/das-mobile/assets/50fb7610135299e447287341.png";
const imgVector1 = "/das-mobile/assets/1871aa1882fde451a9ad1237.png";
const imgImage726 = "/das-mobile/assets/0a88e6c066d320db942a5c42.png";
const imgVector2 = "/das-mobile/assets/6d0f3f40d888daa901cf341b.svg";
const imgVector3 = "/das-mobile/assets/a1a20f0086770418a60f73d9.svg";
const imgScene3 = "/das-mobile/assets/ed63c43039361e656bfb3c22.png";
const imgBook = "/das-mobile/assets/058d5bbdef3c8376e540d0ed.png";
const imgIcon = "/das-mobile/assets/3d97776f96f24f587fe06361.png";
const imgArtifactImage = "/das-mobile/assets/543f01ba42088dbd36191975.png";
const imgImage566 = "/das-mobile/assets/5922dc9dbfd0c96cd496bdac.png";
const imgImage727 = "/das-mobile/assets/080d694426fb72ebbfe8afd7.png";
const imgVector6 = "/das-mobile/assets/ef98d6dc67fb06f2ecc49147.png";
const imgVector7 = "/das-mobile/assets/55ed4dc183cfe4a60040c2fe.png";
const imgMascot42 = "/das-mobile/assets/3e2a82d6ef5f6848bcf1ff39.png";
const imgUnion1 = "/das-mobile/assets/bf6c19a592e80afc90be3fca.png";
const imgShape = "/das-mobile/assets/3cd644fffffcaac42decff82.svg";
const imgShape1 = "/das-mobile/assets/2d8d3792729af571c8265995.svg";
const imgShape2 = "/das-mobile/assets/e816b4ae5fcb3f9d837a4e6c.svg";
const imgVector4 = "/das-mobile/assets/0e4ba74154a2f7acc6edebe2.svg";
const imgVector5 = "/das-mobile/assets/b0eafc4855e90f97c889a926.svg";
const imgVector1189 = "/das-mobile/assets/424783475c8f9450e95cc4d1.svg";
const imgVector1171 = "/das-mobile/assets/47657015d55907fd2206adf6.svg";
const imgVector1170 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1172 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1173 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgVector1174 = "/das-mobile/assets/ac9461b27eb4d923f7b469cf.svg";
const imgShapes1 = "/das-mobile/assets/6e54dd2ef72cb0c80380884b.svg";

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

type TinhNangDuTienVaQuanTrngNhtLaSanNgayProps = {
  className?: string;
  name?: "Letter 1" | "Letter 2" | "Letter 3" | "Letter 4" | "Letter 5" | "Letter 6" | "Letter 7" | "Letter 8" | "Letter 9" | "Letter 10" | "Letter 11";
  stage?: "1";
};

function TinhNangDuTienVaQuanTrngNhtLaSanNgay({ className, name = "Letter 1", stage = "1" }: TinhNangDuTienVaQuanTrngNhtLaSanNgayProps) {
  const is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or = stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6", "Letter 7", "Letter 8", "Letter 9", "Letter 10", "Letter 11"].includes(name);
  const isLetter10And1 = name === "Letter 10" && stage === "1";
  const isLetter11And1 = name === "Letter 11" && stage === "1";
  const isLetter2And1 = name === "Letter 2" && stage === "1";
  const isLetter3And1 = name === "Letter 3" && stage === "1";
  const isLetter4And1 = name === "Letter 4" && stage === "1";
  const isLetter5And1 = name === "Letter 5" && stage === "1";
  const isLetter6And1 = name === "Letter 6" && stage === "1";
  const isLetter7And1 = name === "Letter 7" && stage === "1";
  const isLetter8And1 = name === "Letter 8" && stage === "1";
  const isLetter9And1 = name === "Letter 9" && stage === "1";
  return (
    <div className={className || "h-[44px] relative w-[286.291px]"} id={isLetter11And1 ? "node-5431_88284" : isLetter10And1 ? "node-5431_88282" : isLetter9And1 ? "node-5431_88280" : isLetter8And1 ? "node-5431_88278" : isLetter7And1 ? "node-5431_88276" : isLetter6And1 ? "node-5431_88274" : isLetter5And1 ? "node-5431_88272" : isLetter4And1 ? "node-5431_88270" : isLetter3And1 ? "node-5431_88268" : isLetter2And1 ? "node-5431_88266" : "node-5431_88264"}>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[0] left-[143.15px] not-italic opacity-0 text-[16px] text-[rgba(0,0,0,0)] text-center top-0 tracking-[-0.32px] w-[286.291px]" id={isLetter11And1 ? "node-5431_88283" : isLetter10And1 ? "node-5431_88281" : isLetter9And1 ? "node-5431_88279" : isLetter8And1 ? "node-5431_88277" : isLetter7And1 ? "node-5431_88275" : isLetter6And1 ? "node-5431_88273" : isLetter5And1 ? "node-5431_88271" : isLetter4And1 ? "node-5431_88269" : isLetter3And1 ? "node-5431_88267" : isLetter2And1 ? "node-5431_88265" : "node-5431_88263"} style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or ? "" : "text-[#3c2b1e]"}`}>{isLetter11And1 ? "Tính năng đầu tiên và quan trọng nhất là Săn " : isLetter10And1 ? "Tính năng đầu tiên và quan trọng nhất là " : isLetter9And1 ? "Tính năng đầu tiên và quan trọng nhất " : isLetter8And1 ? "Tính năng đầu tiên và quan trọng " : isLetter7And1 ? "Tính năng đầu tiên và quan " : isLetter6And1 ? "Tính năng đầu tiên và " : isLetter5And1 ? "Tính năng đầu tiên " : isLetter4And1 ? "Tính năng đầu " : isLetter3And1 ? "Tính năng " : isLetter2And1 ? "Tính " : "Tính "}</span>
        <span className={`leading-[1.4] ${stage === "1" && ["Letter 10", "Letter 11"].includes(name) ? "text-[#8a2921]" : stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6", "Letter 7", "Letter 8", "Letter 9"].includes(name) ? "text-[#3c2b1e]" : ""}`}>{isLetter11And1 ? "Ngay" : isLetter10And1 ? "Săn " : isLetter9And1 ? "là " : isLetter8And1 ? "nhất " : isLetter7And1 ? "trọng " : isLetter6And1 ? "quan " : isLetter5And1 ? "và " : isLetter4And1 ? "tiên " : isLetter3And1 ? "đầu " : isLetter2And1 ? "năng " : "năng đầu tiên và quan trọng nhất là Săn Ngay! "}</span>
        {is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6OrLetter7Or && <span className={`leading-[1.4] ${isLetter11And1 ? "text-[#3c2b1e]" : ""}`}>{isLetter11And1 ? "! " : isLetter10And1 ? "Ngay! " : isLetter9And1 ? "Săn Ngay! " : isLetter8And1 ? "là Săn Ngay! " : isLetter7And1 ? "nhất là Săn Ngay! " : isLetter6And1 ? "trọng nhất là Săn Ngay! " : isLetter5And1 ? "quan trọng nhất là Săn Ngay! " : isLetter4And1 ? "và quan trọng nhất là Săn Ngay! " : isLetter3And1 ? "tiên và quan trọng nhất là Săn Ngay! " : isLetter2And1 ? "đầu tiên và quan trọng nhất là Săn Ngay! " : ""}</span>}
      </p>
    </div>
  );
}

type BadgeProps = {
  className?: string;
  color?: "Accent";
  style?: "Pattern";
  type?: "Round";
};

function Badge({ className, color = "Accent", style = "Pattern", type = "Round" }: BadgeProps) {
  return (
    <div className={className || "drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] relative size-[40px]"} data-node-id="4848:33768">
      <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] pointer-events-none rounded-[2014.611px]" data-node-id="4848:33769" data-name="BASE">
        <div aria-hidden className="absolute bg-gradient-to-b from-[#ad9021] from-[35.577%] inset-0 rounded-[2014.611px] to-[#f3cb2e] to-[76.923%]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-4.354px_-2.177px_1.088px_0px_rgba(41,35,28,0.25),inset_2.177px_2.177px_4.354px_0px_rgba(0,0,0,0.5)]" />
      </div>
      <div className="absolute contents inset-0" data-node-id="4848:33770">
        <div className="absolute inset-[10.45%_7.69%_4.53%_6.09%]" data-node-id="4848:33771" data-name="Vector 1166 (Stroke)">
          <div className="absolute inset-[-1.92%_-1.89%]">
            <img alt="" className="block max-w-none size-full" src={imgVector1166Stroke} />
          </div>
        </div>
        <div className="absolute inset-[-5.44%_-16.33%_-16.33%_-5.44%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup427322577} />
        </div>
        <div className="absolute flex inset-[39.14%_2.2%_47.37%_90.31%] items-center justify-center mix-blend-plus-lighter" data-node-id="4848:33773" style={{ containerType: "size" }}>
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
      <div className="-translate-y-1/2 absolute aspect-[65.99798583984375/65.53138732910156] left-1/4 right-1/4 top-[calc(50%+1px)]" data-node-id="4848:33775" data-name="Pattern">
        <div className="absolute inset-[-1%]">
          <img alt="" className="block max-w-none size-full" src={imgPattern} />
        </div>
      </div>
      <div className="absolute contents inset-[1.1%_50.69%_80.06%_16.84%]" data-node-id="4848:33776" style={{ containerType: "size" }}>
        <div className="absolute flex inset-[8.31%_66.04%_80.55%_17.22%] items-center justify-center mix-blend-soft-light" data-node-id="4848:33777" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(12.8854cqw,45.2155cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(87.1146cqw,-54.7845cqh)]">
            <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
              <div className="absolute inset-[-34.51%_-3.85%_-29.59%_-9.77%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[3.57%_51.5%_90.32%_38.5%] items-center justify-center mix-blend-soft-light" data-node-id="4848:33778" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(8.78698cqw,69.9143cqh)] rotate-[-11.38deg] skew-x-[0.27deg] w-[hypot(91.213cqw,-30.0857cqh)]">
            <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
              <div className="absolute inset-[-68.61%_-28.05%_-60.36%_-32.21%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[6.6%_65.69%_90.56%_31.44%] items-center justify-center mix-blend-soft-light" data-node-id="4848:33779" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
            <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
              <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[5.74%_63.66%_91.42%_33.46%] items-center justify-center mix-blend-soft-light" data-node-id="4848:33780" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(29.7427cqw,70.2573cqh)] rotate-[-22.7deg] skew-x-[0.49deg] w-[hypot(70.2573cqw,-29.7427cqh)]">
            <div className="opacity-60 relative size-full" data-name="Vector 1164 (Stroke)">
              <div className="absolute inset-[-85.79%_-73.76%_-65.9%_-84.48%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1164Stroke3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[5.74%_4.39%_3.1%_3.36%] mix-blend-screen" data-node-id="4848:33781">
        <div className="absolute inset-[-3.78%_-3.19%_-3.82%_-4.19%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1165} />
        </div>
      </div>
    </div>
  );
}

type MuseumCardProps = {
  className?: string;
  prop2TextLine?: boolean;
};

function MuseumCard({ className, prop2TextLine = false }: MuseumCardProps) {
  const isNotProp2TextLine = !prop2TextLine;
  const isProp2TextLine = prop2TextLine;
  return (
    <div className={className || "h-[226px] relative w-[277px]"} id={isProp2TextLine ? "node-4625_73238" : "node-4625_73239"}>
      <div className="absolute h-[208px] left-0 top-[18px] w-[277px]" id={isProp2TextLine ? "node-4625_73215" : "node-4625_73027"} data-name="Museum  Frame">
        <div className="absolute inset-[2.31%_2.17%_3.53%_1.11%]" id={isProp2TextLine ? "node-4625_73216" : "node-4625_73028"} data-name="Union">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="195.865" src={imgUnion} width="267.902" />
        </div>
        <div className="absolute inset-[8.08%_9.17%_23%_7.8%]" id={isProp2TextLine ? "node-4625_73217" : "node-4625_73029"} data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="143.341" src={isProp2TextLine ? imgVector1 : imgVector} width="229.983" />
        </div>
      </div>
      <Badge className="absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] inset-[1.61%_-3.5%_80.69%_89.06%]" />
      {isNotProp2TextLine && (
        <>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] left-1/2 not-italic text-[#3c2b1e] text-[14px] text-center top-[190px] tracking-[-0.28px] whitespace-nowrap" data-node-id="4625:73047" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng vũng tàu
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] left-[calc(50%-3px)] not-italic text-[#3c2b1e] text-[16px] text-center top-[161px] tracking-[-0.32px] w-[9px]" data-node-id="4625:73212" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            2
          </p>
        </>
      )}
      {isProp2TextLine && (
        <>
          <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Young_Display_Bold:Bold'] gap-[2px] items-center leading-[normal] left-1/2 not-italic text-[#3c2b1e] text-[14px] text-center top-[184px] tracking-[-0.28px]" data-node-id="4625:73234" data-name="Text group">
            <p className="relative shrink-0 w-full" data-node-id="4625:73235" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>{`Bảo tàng lịch sử thành phố `}</p>
            <p className="relative shrink-0 w-full" data-node-id="4625:73236" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Hồ chí minh
            </p>
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] left-[calc(50%-3px)] not-italic text-[#3c2b1e] text-[16px] text-center top-[161px] tracking-[-0.32px] w-[9px]" data-node-id="4625:73233" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            3
          </p>
        </>
      )}
    </div>
  );
}

function MapButton({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[72px]"} data-node-id="5781:32126" data-name="Map Button">
      <div className="absolute contents left-0 top-0" data-node-id="5781:32120" data-name="Shapes">
        <div className="absolute left-0 size-[72px] top-0" data-node-id="5781:32121" data-name="Vector">
          <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
            <img alt="" className="block max-w-none size-full" src={imgVector2} />
          </div>
        </div>
        <div className="absolute left-[4.11px] size-[63.782px] top-[4.11px]" data-node-id="5781:32122" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="5781:32123" data-name="image 726">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-[-6.94%] max-w-none size-[112.87%] top-[-5.82%]" src={imgImage726} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Scene3() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5431:72916" data-name="Scene 3">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScene3} />
      <div className="absolute h-[820px] left-[-9px] top-[56px] w-[445px]" data-node-id="5431:72917" data-name="Book">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.88%] left-0 max-w-none top-[0.12%] w-full" src={imgBook} />
        </div>
      </div>
      <MapButton className="absolute right-[28px] size-[72px] top-[56px]" />
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex h-[129px] items-end justify-center left-1/2 pb-[28px] w-[440px]" data-node-id="5431:72929" data-name="Navbar">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(12,10,8,0)] h-[179px] left-1/2 to-[#191510] w-[440px]" data-node-id="I5431:72929;4568:31676" data-name="Linear BG" />
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:72929;4568:31677" data-name="Museum">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#f3cb2e] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:72929;4568:31678" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bảo tàng
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[72px] top-[-16px]" data-node-id="I5431:72929;4591:64448" data-name="Icon">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-12.18%] max-w-none size-[125%] top-[-12.82%]" src={imgIcon} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:72929;4568:31692" data-name="Artifact">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:72929;4568:31693" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Cổ vật
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:72929;4847:20305" data-name="Icon">
            <div className="absolute flex h-[56.58px] items-center justify-center left-[7.17px] top-[1.88px] w-[52.999px]" data-node-id="I5431:72929;4847:20306">
              <div className="flex-none rotate-30">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5431:72929;4847:20308" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape} />
                    </div>
                  </div>
                  <div className="absolute border-[#686f2e] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.88%_8.34%_5.99%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:72929;4847:20311" data-name="Frame border" />
                  <div className="absolute bg-[#686f2e] inset-[72.27%_8.35%_5.99%_6.93%]" data-node-id="I5431:72929;4847:20313" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.34px] text-[#686f2e] text-[3.424px] text-left top-[3.82px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:72929;4847:20315" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[52.582px] items-center justify-center left-[2.63px] top-[-1.98px] w-[45.665px]" data-node-id="I5431:72929;4847:20316">
              <div className="flex-none rotate-15">
                <div className="h-[45px] relative w-[35.218px]" data-name="Stamp">
                  <div className="absolute inset-[0_1.21%_1.1%_0]" data-node-id="I5431:72929;4847:20318" data-name="Shape">
                    <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                      <img alt="" className="block max-w-none size-full" src={imgShape1} />
                    </div>
                  </div>
                  <div className="absolute border-[#2f5f7c] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.89%_8.33%_5.98%_6.94%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:72929;4847:20321" data-name="Frame border" />
                  <div className="absolute bg-[#2f5f7c] inset-[72.26%_8.34%_6.01%_6.94%]" data-node-id="I5431:72929;4847:20323" data-name="Tag name" />
                  <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.53px] text-[#2f5f7c] text-[3.424px] text-left top-[3.67px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:72929;4847:20325" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute h-[45px] left-[-2.42px] top-[-1.61px] w-[35.218px]" data-node-id="I5431:72929;4847:20326" data-name="Stamp">
              <div className="absolute inset-[0_1.2%_1.1%_0.01%]" data-node-id="I5431:72929;4847:20328" data-name="Shape">
                <div className="absolute inset-[-0.43%_-1.41%_-1.1%_-0.55%]">
                  <img alt="" className="block max-w-none size-full" src={imgShape2} />
                </div>
              </div>
              <div className="absolute border-[#b1352a] border-[0.342px] border-solid content-stretch flex flex-col inset-[4.9%_8.33%_5.97%_6.95%] items-center overflow-clip p-[1.957px]" data-node-id="I5431:72929;4847:20331" data-name="Frame border">
                <div className="relative shrink-0 size-[29.348px]" data-node-id="I5431:72929;4847:20332" data-name="Artifact image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgArtifactImage} />
                </div>
              </div>
              <div className="absolute bg-[#b1352a] inset-[72.31%_8.33%_5.95%_6.95%]" data-node-id="I5431:72929;4847:20333" data-name="Tag name" />
              <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] not-italic right-[8.05px] text-[#b1352a] text-[3.424px] text-left top-[3.8px] tracking-[-0.0685px] translate-x-full whitespace-nowrap" data-node-id="I5431:72929;4847:20335" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                01
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:72929;5131:35069" data-name="Hunt">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:72929;5131:35070" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Săn ngay
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:72929;5131:35303" data-name="image 566">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-[-13.53%] max-w-none size-[128.57%] top-[-12.2%]" src={imgImage566} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] h-[85px] items-center justify-end relative shrink-0 w-[104px]" data-node-id="I5431:72929;5961:95100" data-name="Events">
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#fefaea] text-[18px] text-center tracking-[-0.54px] w-[min-content]" data-node-id="I5431:72929;5961:95101" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Hồ sơ
          </p>
          <div className="-translate-x-1/2 absolute left-1/2 size-[56px] top-0" data-node-id="I5431:72929;5961:98755" data-name="Icon frame">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[52px] top-1/2" data-node-id="I5431:72929;5961:98756" data-name="Avatar">
              <div className="absolute contents left-0 top-0" data-node-id="I5431:72929;5961:98756;5104:42636" data-name="Shapes">
                <div className="absolute left-0 size-[52px] top-0" data-node-id="I5431:72929;5961:98756;5104:42637" data-name="Vector">
                  <div className="absolute inset-[-0.48%_-1.92%_-1.92%_-0.48%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector4} />
                  </div>
                </div>
                <div className="absolute left-[2.97px] size-[46.065px] top-[2.96px]" data-node-id="I5431:72929;5961:98756;5104:42638" data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                </div>
                <div className="absolute left-[7.85px] size-[36.198px] top-[7.91px]" data-node-id="I5431:72929;5961:98756;5104:42639" data-name="image 726">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.9%] left-[5.67%] max-w-none top-[-8.06%] w-[88.66%]" src={imgImage727} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MuseumCard className="absolute flex h-[244.312px] items-center justify-center left-[22px] top-[559px] w-[291.726px]" prop2TextLine />
      <div className="absolute flex h-[245.032px] items-center justify-center left-[101px] top-[318px] w-[292.296px]" data-node-id="5431:72931">
        <div className="flex-none rotate-[4.06deg]">
          <div className="h-[226px] relative w-[277px]" data-name="Museum card">
            <div className="absolute h-[208px] left-0 top-[18px] w-[277px]" data-node-id="I5431:72931;4625:73027" data-name="Museum  Frame">
              <div className="absolute inset-[2.31%_2.17%_3.53%_1.11%]" data-node-id="I5431:72931;4625:73028" data-name="Union">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="195.865" src={imgUnion} width="267.902" />
              </div>
              <div className="absolute inset-[8.08%_9.17%_23%_7.8%]" data-node-id="I5431:72931;4625:73029" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="143.341" src={imgVector6} width="229.983" />
              </div>
            </div>
            <Badge className="absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] inset-[1.61%_-3.5%_80.69%_89.06%]" />
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] left-1/2 not-italic text-[#3c2b1e] text-[14px] text-center top-[190px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5431:72931;4625:73047" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Bảo tàng vũng tàu
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] left-[calc(50%-3px)] not-italic text-[#3c2b1e] text-[16px] text-center top-[161px] tracking-[-0.32px] w-[9px]" data-node-id="I5431:72931;4625:73212" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              2
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[260.779px] items-center justify-center left-[13px] top-[69px] w-[304.555px]" data-node-id="5431:72932">
        <div className="flex-none rotate-[-7.63deg]">
          <div className="h-[226px] relative w-[277px]" data-name="Museum card">
            <div className="absolute h-[208px] left-0 top-[18px] w-[277px]" data-node-id="I5431:72932;4625:73027" data-name="Museum  Frame">
              <div className="absolute inset-[2.31%_2.17%_3.53%_1.11%]" data-node-id="I5431:72932;4625:73028" data-name="Union">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="195.865" src={imgUnion} width="267.902" />
              </div>
              <div className="absolute inset-[8.08%_9.17%_23%_7.8%]" data-node-id="I5431:72932;4625:73029" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="143.341" src={imgVector7} width="229.983" />
              </div>
            </div>
            <Badge className="absolute drop-shadow-[0px_4.354px_1.088px_rgba(136,122,29,0.25)] inset-[1.61%_-3.5%_80.69%_89.06%]" />
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[normal] left-1/2 not-italic text-[#3c2b1e] text-[14px] text-center top-[190px] tracking-[-0.28px] whitespace-nowrap" data-node-id="I5431:72932;4625:73047" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Bảo tàng Thành phố Hồ Chí Minh
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Young_Display_Bold:Bold'] h-[13px] leading-[normal] left-[calc(50%-3px)] not-italic text-[#3c2b1e] text-[16px] text-center top-[161px] tracking-[-0.32px] w-[9px]" data-node-id="I5431:72932;4625:73212" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              1
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[76px] items-center justify-center left-1/2 top-0 w-[440px]" data-node-id="5431:72933">
        <div className="-scale-y-100 flex-none">
          <div className="bg-gradient-to-b from-[19.079%] from-[rgba(12,10,8,0)] h-[76px] relative to-[108.75%] to-[rgba(25,21,16,0.7)] w-[440px]" data-name="Linear BG" />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[956px] left-1/2 opacity-80 top-1/2 w-[440px]" data-node-id="5431:72934" data-name="BG" />
      <div className="-translate-x-1/2 absolute h-[349px] left-[calc(50%+39.5px)] top-[407px] w-[345px]" data-node-id="5431:83005" data-name="Mascot Guide">
        <div className="absolute contents left-[97px] top-[101px]" data-node-id="5431:83006" data-name="Mascot">
          <div className="absolute h-[158.603px] left-[140.37px] top-[166.12px] w-[160.273px]" data-node-id="5431:83007">
            <div className="absolute inset-[-0.63%_-2.5%_-2.52%_-0.62%]">
              <img alt="" className="block max-w-none size-full" src={imgVector1189} />
            </div>
          </div>
          <div className="absolute left-[97px] size-[248px] top-[101px]" data-node-id="5431:83008" data-name="mascot 4 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMascot42} />
          </div>
        </div>
        <div className="absolute contents left-0 top-0" data-node-id="5431:83009">
          <div className="absolute contents left-0 top-0" data-node-id="5431:83010" data-name="tag">
            <div className="absolute flex h-[118.982px] items-center justify-center left-0 top-0 w-[299.006px]" data-node-id="5431:83011">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[118.982px] relative w-[299.006px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1171} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[7.341px] items-center justify-center left-[261.11px] top-[121.65px] w-[18.433px]" data-node-id="5431:83012">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[7.341px] relative w-[18.433px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1170} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[18.298px] items-center justify-center left-[237.92px] top-[107.76px] w-[8.574px]" data-node-id="5431:83013">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[18.298px] relative w-[8.574px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1172} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[2.937px] items-center justify-center left-[246.49px] top-[126.06px] w-[32.961px]" data-node-id="5431:83014">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[2.937px] relative w-[32.961px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1173} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[12.185px] items-center justify-center left-[256.99px] top-[109.47px] w-[4.121px]" data-node-id="5431:83015">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[12.185px] relative w-[4.121px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1174} />
                </div>
              </div>
            </div>
            <div className="absolute flex h-[127.187px] items-center justify-center left-0 top-[0.73px] w-[312px]" data-node-id="5431:83016">
              <div className="-scale-y-100 flex-none rotate-180">
                <div className="h-[127.187px] relative w-[312px]" data-name="Union">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" height="127.187" src={imgUnion1} width="312" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[105.928px] items-center justify-center left-[0.5px] px-[12px] py-[8px] top-px w-[310.291px]" data-node-id="5431:83019" data-name="Text">
            <div className="bg-[rgba(255,255,255,0)] flex-1 h-[66px] min-w-px relative" data-node-id="5431:88319" data-name="Tính năng đầu tiên và quan trọ... - Animation ▶">
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 2" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 3" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 4" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 5" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 6" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 7" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 8" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 9" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 10" />
              <TinhNangDuTienVaQuanTrngNhtLaSanNgay className="absolute h-[44px] left-0 top-[11.04px] w-[286.291px]" name="Letter 11" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5833:64871" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5833:64872" data-name="Navigation">
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center opacity-0 relative shrink-0" data-node-id="5833:64874" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5833:64875" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="5833:64876">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
                <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5833:64877" data-name="Shapes">
                  <div className="absolute inset-[-1.25%_-2.63%_-5%_-0.66%]">
                    <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute flex h-[11px] items-center justify-center left-1/2 top-[calc(50%-5px)] w-[54px]" data-node-id="5833:64880">
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
