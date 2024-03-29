import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddFilled'

      short_name='ListAltAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 1016V896H560v-80h120V696h80v120h120v80H760v120h-80ZM320 776q17 0 28.5-11.5T360 736q0-17-11.5-28.5T320 696q-17 0-28.5 11.5T280 736q0 17 11.5 28.5T320 776Zm0-160q17 0 28.5-11.5T360 576q0-17-11.5-28.5T320 536q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616Zm0-160q17 0 28.5-11.5T360 416q0-17-11.5-28.5T320 376q-17 0-28.5 11.5T280 416q0 17 11.5 28.5T320 456Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80ZM120 936V216h720v433q-27-16-57.5-24t-62.5-8q-53 0-99 21t-79 58H440v80h54q-7 19-10.5 39t-3.5 41q0 20 3 40t10 40H120Z"/>
    </Icon>
  );
});

IconMaterialListAltAddFilled.displayName = 'AmauiIconMaterialListAltAddFilled';

export default IconMaterialListAltAddFilled;
