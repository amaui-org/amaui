import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenW100'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m300 778 176 100q16 6 30-3t14-26V373q0-10-5.5-18T500 343l-220-87v522h20Zm-10.148 55.694Q273 827 262.5 811.923 252 796.846 252 778V258q0-13 8.5-21.5T282 228l228 90q16.808 6.72 27.404 22.027Q548 355.333 548 374v475q0 32.489-26.5 50.244Q495 917 465.693 905.099l-175.841-71.405ZM520 804v-28h128q14 0 23-9t9-23V288q0-14-9-23t-23-9H282v-28h365.848Q673 228 690.5 245.625T708 288v456q0 24.75-17.625 42.375T648 804H520Zm-240-26V256v522Z"/>
    </Icon>
  );
});

IconMaterialDualScreenW100.displayName = 'AmauiIconMaterialDualScreenW100';

export default IconMaterialDualScreenW100;
