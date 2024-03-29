import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAdd'

      short_name='ListAltAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 896H560v-80h120V696h80v120h120v80H760v120h-80V896Zm-480-40V296v560Zm-80 80V216h720v433q-18-11-38-18t-42-11V296H200v560h280q0 21 3 41t10 39H120Zm200-160q17 0 28.5-11.5T360 736q0-17-11.5-28.5T320 696q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776Zm0-160q17 0 28.5-11.5T360 576q0-17-11.5-28.5T320 536q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616Zm0-160q17 0 28.5-11.5T360 416q0-17-11.5-28.5T320 376q-17 0-28.5 11.5T280 416q0 17 11.5 28.5T320 456Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80Zm0 320h54q8-23 20-43t28-37H440v80Z"/>
    </Icon>
  );
});

IconMaterialListAltAdd.displayName = 'AmauiIconMaterialListAltAdd';

export default IconMaterialListAltAdd;
