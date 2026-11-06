const imgShapes = "/das-mobile/assets/c30de6808ac41edfc44152d9.svg";
const imgGroup1171277045 = "/das-mobile/assets/59715e096e7212985306ae94.svg";
const imgShapes1 = "/das-mobile/assets/9c173b717da5b3c3ed349b89.svg";
const imgGroup1171277046 = "/das-mobile/assets/203838708ca2d14a28d0f002.svg";

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[40px] pt-[64px] px-[24px] relative size-full" data-node-id="6123:92161" data-name="Header">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="6123:92162" data-name="Navigation">
        <a className="block cursor-pointer h-[40px] relative shrink-0 w-[76px]" data-node-id="I6123:92162;5415:24248" data-name="Icon Button">
          <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6123:92162;5415:24248;4856:21239" data-name="Shapes">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6123:92162;5415:24248;4856:21242" data-name="Icon">
            <div className="absolute inset-[8.33%_15.84%_8.33%_12.5%]" data-node-id="I6123:92162;5415:24248;4856:21243">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
            </div>
          </div>
        </a>
        <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="I6123:92162;5415:24251">
          <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I6123:92162;5415:24252" data-name="Shapes">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes1} />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I6123:92162;5415:24255" data-name="Icon">
            <div className="absolute inset-[1.56%_8.33%_1.54%_8.33%]" data-node-id="I6123:92162;5415:24256">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277046} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
