import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddFilled'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 976q-17 0-28.5-11.5T720 936v-80h-80q-17 0-28.5-11.5T600 816q0-17 11.5-28.5T640 776h80v-80q0-17 11.5-28.5T760 656q17 0 28.5 11.5T800 696v80h80q17 0 28.5 11.5T920 816q0 17-11.5 28.5T880 856h-80v80q0 17-11.5 28.5T760 976Zm-583 0q-27 0-37.5-24.5T148 908l663-663q19-19 43.5-8.5T879 274v328q-26-16-57-23.5t-62-7.5q-102 0-173.5 71.5T515 816q0 46 15 85.5t45 74.5H177Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddFilled.displayName = 'AmauiIconMaterialSignalCellularAddFilled';

export default IconMaterialSignalCellularAddFilled;
