import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddFilled'

      short_name='PrintAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 936q-17 0-28.5-11.5T240 896V776H120q-17 0-28.5-11.5T80 736V536q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880 536v30q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530 696H320v160h204q7 22 17 42t24 38H280Zm-40-560v-80q0-33 23.5-56.5T320 216h320q33 0 56.5 23.5T720 296v80H240Zm480 440h-80q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736h80v-80q0-17 11.5-28.5T760 616q17 0 28.5 11.5T800 656v80h80q17 0 28.5 11.5T920 776q0 17-11.5 28.5T880 816h-80v80q0 17-11.5 28.5T760 936q-17 0-28.5-11.5T720 896v-80Z"/>
    </Icon>
  );
});

IconMaterialPrintAddFilled.displayName = 'AmauiIconMaterialPrintAddFilled';

export default IconMaterialPrintAddFilled;
