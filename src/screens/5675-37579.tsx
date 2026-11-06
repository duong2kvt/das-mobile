const imgShapes = "/das-mobile/assets/b84bc5e0c9f1ac01bedd13e7.svg";
const imgGroup1171277045 = "/das-mobile/assets/b587d15659752dd195dd890b.svg";

type PaginationProps = {
  className?: string;
  position?: "Right";
  text?: string;
};

function Pagination({ className, position = "Right", text = "1/5" }: PaginationProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-between relative w-[320px]"} data-node-id="5675:20062">
      <div className="h-[40px] opacity-0 relative shrink-0 w-[76px]" data-node-id="5675:20063" data-name="Icon Button">
        <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5675:20063;4856:21247" data-name="Shapes">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5675:20063;4856:21250" data-name="Icon">
          <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5675:20063;4856:21251">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-1 font-['Inter:Semi_Bold'] font-semibold leading-[24px] min-w-px not-italic relative text-[#291d14] text-[16px] text-center tracking-[-0.32px]" data-node-id="5675:20064" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        {text}
      </p>
      <div className="flex items-center justify-center relative shrink-0" data-node-id="5675:20065">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
            <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="I5675:20065;4856:21239" data-name="Shapes">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="I5675:20065;4856:21242" data-name="Icon">
              <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="I5675:20065;4856:21243">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pagination1() {
  return <Pagination className="content-stretch flex items-center justify-between relative size-full" />;
}
