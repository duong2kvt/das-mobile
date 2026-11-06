const imgStateSelected = "/das-mobile/assets/d3920f4450e55b9d671757d1.svg";
const imgTag = "/das-mobile/assets/c639b59aec96aa12c8770db8.svg";

type TagProps = {
  className?: string;
  state?: "Selected";
};

function Tag({ className, state = "Selected" }: TagProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[8px] py-[18px] relative w-[112px]"} data-node-id="5608:71970">
      <div className="absolute inset-[-1.79%_-0.89%]">
        <img alt="" className="block max-w-none size-full" src={imgStateSelected} />
      </div>
      <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[normal] min-w-px not-italic relative text-[#3c2b1e] text-[16px] text-center tracking-[-0.32px]" data-node-id="5608:71964" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
        Thăng long
      </p>
    </div>
  );
}

export default function GroupTag() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-node-id="5853:107639" data-name="Group tag">
      <div className="h-[56px] relative shrink-0 w-[344px]" data-node-id="I5853:107639;5778:28475" data-name="Frame">
        <Tag className="absolute content-stretch flex gap-[8px] h-[56px] items-center justify-center left-0 px-[8px] py-[18px] top-[-8px] w-[112px]" />
        <div className="absolute content-stretch flex gap-[8px] h-[56px] items-center justify-center left-[116px] px-[8px] py-[18px] top-0 w-[112px]" data-node-id="I5853:107639;5608:71977" data-name="Tag">
          <div className="absolute inset-[-1.79%_-0.89%]">
            <img alt="" className="block max-w-none size-full" src={imgTag} />
          </div>
          <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[normal] min-w-px not-italic relative text-[#3c2b1e] text-[16px] text-center tracking-[-0.32px]" data-node-id="I5853:107639;5608:71977;5608:71968" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Sa Huỳnh
          </p>
        </div>
        <div className="absolute content-stretch flex gap-[8px] h-[56px] items-center justify-center left-[232px] px-[8px] py-[18px] top-0 w-[112px]" data-node-id="I5853:107639;5608:71982" data-name="Tag">
          <div className="absolute inset-[-1.79%_-0.89%]">
            <img alt="" className="block max-w-none size-full" src={imgTag} />
          </div>
          <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[normal] min-w-px not-italic relative text-[#3c2b1e] text-[16px] text-center tracking-[-0.32px]" data-node-id="I5853:107639;5608:71982;5608:71968" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Đông Sơn
          </p>
        </div>
      </div>
    </div>
  );
}
