import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopPortraitFilled'

      short_name='DesktopPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240h120q17 0 28.5-11.5T640-280v-280q0-17-11.5-28.5T600-600H480q-17 0-28.5 11.5T440-560v280q0 17 11.5 28.5T480-240ZM350-360q13 0 21.5-8.5T380-390v-250q0-8 6-14t14-6h90q13 0 21.5-8.5T520-690q0-13-8.5-21.5T490-720h-90q-33 0-56.5 23.5T320-640v250q0 13 8.5 21.5T350-360Zm450 200q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640Z"/>
    </Icon>
  );
});

IconMaterialDesktopPortraitFilled.displayName = 'AmauiIconMaterialDesktopPortraitFilled';

export default IconMaterialDesktopPortraitFilled;
