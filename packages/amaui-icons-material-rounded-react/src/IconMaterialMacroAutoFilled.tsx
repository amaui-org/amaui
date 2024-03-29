import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMacroAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MacroAutoFilled'

      short_name='MacroAuto'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 696q-42 0-71-29t-29-71v-8q-12 9-25.5 13.5T324 606q-42 0-71-29t-29-71q0-30 16-54t42-36q-26-12-42-36t-16-54q0-42 29-71t71-29q17 0 30.5 4.5T380 244v-8q0-42 29-71t71-29q42 0 71 29t29 71v8q9-7 19.5-11t22.5-6l-53 142q-13-24-36.5-38.5T480 316q-42 0-71 29t-29 71q0 42 29 71t71 29q13 0 24-3t22-8q3 21 19.5 36t39.5 15h138q-13 23-35.5 36.5T636 606q-17 0-30.5-4.5T580 588v8q0 42-29 71t-71 29Zm199-292-25 73q-3 8-10.5 13.5T627 496q-15 0-23.5-12.5T600 457l112-301q4-9 11.5-14.5T740 136h23q9 0 16.5 5.5T791 156l115 302q5 14-3 26t-23 12q-9 0-17-5.5T852 476l-25-72H679Zm18-52h110l-53-150h-2l-55 150ZM480 976q-140 0-241.5-92.5T122 656q-2-17 9.5-28.5T160 618q135 15 227.5 116.5T480 976Zm0 0q0-140 92.5-241.5T800 618q17-2 28.5 9.5T838 656q-15 135-116.5 227.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialMacroAutoFilled.displayName = 'AmauiIconMaterialMacroAutoFilled';

export default IconMaterialMacroAutoFilled;
