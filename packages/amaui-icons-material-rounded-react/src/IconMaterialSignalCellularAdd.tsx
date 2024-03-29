import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAdd'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m148 908 663-663q19-19 43.5-8.5T879 274v328q-18-11-38-17.5T799 574V370L273 896h255q8 23 20 43t27 37H177q-27 0-37.5-24.5T148 908Zm572-52h-80q-17 0-28.5-11.5T600 816q0-17 11.5-28.5T640 776h80v-80q0-17 11.5-28.5T760 656q17 0 28.5 11.5T800 696v80h80q17 0 28.5 11.5T920 816q0 17-11.5 28.5T880 856h-80v80q0 17-11.5 28.5T760 976q-17 0-28.5-11.5T720 936v-80Zm-447 40 526-526-136.5 136.5-121 121L418 751 273 896Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAdd.displayName = 'AmauiIconMaterialSignalCellularAdd';

export default IconMaterialSignalCellularAdd;
