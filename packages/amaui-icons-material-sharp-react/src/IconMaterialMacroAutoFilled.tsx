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
      <path d="M480 696q-42 0-71-29t-29-71v-8q-12 9-25.5 13.5T324 606q-42 0-71-29t-29-71q0-30 16-54t42-36q-26-12-42-36t-16-54q0-42 29-71t71-29q17 0 30.5 4.5T380 244v-8q0-42 29-71t71-29q42 0 71 29t29 71v8q9-7 19.5-11t22.5-6l-53 142q-13-24-36.5-38.5T480 316q-42 0-71 29t-29 71q0 42 29 71t71 29q13 0 24-3t22-8q3 21 19.5 36t39.5 15h138q-13 23-35.5 36.5T636 606q-17 0-30.5-4.5T580 588v8q0 42-29 71t-71 29Zm105-200 135-360h64l137 360h-62l-32-92H679l-32 92h-62Zm112-144h110l-53-150h-2l-55 150ZM480 976q0-74 28.5-139.5T586 722q49-49 114.5-77.5T840 616q0 74-28.5 139.5T734 870q-49 49-114.5 77.5T480 976Zm0 0q0-74-28.5-139.5T374 722q-49-49-114.5-77.5T120 616q0 74 28.5 139.5T226 870q49 49 114.5 77.5T480 976Z"/>
    </Icon>
  );
});

IconMaterialMacroAutoFilled.displayName = 'AmauiIconMaterialMacroAutoFilled';

export default IconMaterialMacroAutoFilled;
