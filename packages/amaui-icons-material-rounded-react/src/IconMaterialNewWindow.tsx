import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindow'

      short_name='NewWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h200q17 0 28.5 11.5T440 256q0 17-11.5 28.5T400 296H200v560h560V656q0-17 11.5-28.5T800 616q17 0 28.5 11.5T840 656v200q0 33-23.5 56.5T760 936H200Zm440-520h-80q-17 0-28.5-11.5T520 376q0-17 11.5-28.5T560 336h80v-80q0-17 11.5-28.5T680 216q17 0 28.5 11.5T720 256v80h80q17 0 28.5 11.5T840 376q0 17-11.5 28.5T800 416h-80v80q0 17-11.5 28.5T680 536q-17 0-28.5-11.5T640 496v-80Z"/>
    </Icon>
  );
});

IconMaterialNewWindow.displayName = 'AmauiIconMaterialNewWindow';

export default IconMaterialNewWindow;
