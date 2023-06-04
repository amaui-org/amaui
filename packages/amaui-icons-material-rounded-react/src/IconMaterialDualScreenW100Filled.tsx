import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100Filled'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M249.851 833.694Q233 827 222.5 811.923 212 796.846 212 778V258q0-16.517 14.5-25.758Q241 223 258 230l212 88q16.808 6.72 27.404 22.027Q508 355.333 508 374v475q0 31.733-26.5 49.867Q455 917 425.693 905.099l-175.842-71.405ZM588 804V374q0-54-39.5-90T457 228h231q24.75 0 42.375 17.625T748 288v456q0 24.75-17.625 42.375T688 804H588Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100Filled.displayName = 'AmauiIconMaterialDualScreenW100Filled';

export default IconMaterialDualScreenW100Filled;
