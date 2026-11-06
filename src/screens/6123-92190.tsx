const imgShapes = "/das-mobile/assets/41e718e11b11911ebd3b5c4a.svg";
const imgGroup1171277045 = "/das-mobile/assets/af0731c85089ecb0096333b1.svg";
const imgTakePhotoDefault = "/das-mobile/assets/28f47578cc0e31dc2d22e12c.png";
const imgScan = "/das-mobile/assets/f372ac756b5ad13919acef57.svg";
const imgShapes1 = "/das-mobile/assets/673207971ab1e3374c95f1b4.svg";
const imgGroup1171277046 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";

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

export default function TakePhotoDefault() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center relative size-full" data-node-id="6123:92190" data-name="Take photo - Default">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.05%] left-[-97.79%] max-w-none top-[-0.05%] w-[326.12%]" src={imgTakePhotoDefault} />
      </div>
      <div className="absolute h-[956px] left-0 top-0 w-[440px]" data-node-id="6123:92191" data-name="Scan">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgScan} />
      </div>
      <div className="content-stretch flex flex-1 flex-col items-start min-w-px pb-[40px] pt-[64px] px-[24px] relative" data-node-id="6123:92209" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6123:92210" data-name="Navigation">
          <IconButton className="h-[40px] relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center relative shrink-0" data-node-id="I6123:92210;5415:24249" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="I6123:92210;5415:24250" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="I6123:92210;5415:24251">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6123:92210;5415:24252" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6123:92210;5415:24255" data-name="Icon">
              <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I6123:92210;5415:24256">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-0 top-[844px] w-[440px]" data-node-id="6123:92211" data-name="Bottom Action">
        <div className="content-stretch flex gap-[40px] items-center justify-center px-[16px] relative shrink-0 w-full" data-node-id="6123:92212" data-name="Camera Action Container">
          <div className="bg-[rgba(249,249,249,0.2)] content-stretch flex flex-col items-center justify-center overflow-clip p-[8px] relative rounded-[100px] shrink-0 size-[72px]" data-node-id="6123:92214" data-name="Button">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f9f9f9] border border-solid border-white left-1/2 rounded-[100px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.15)] size-[54px] top-1/2" data-node-id="6123:92215" data-name="Button" />
          </div>
        </div>
      </div>
    </a>
  );
}
