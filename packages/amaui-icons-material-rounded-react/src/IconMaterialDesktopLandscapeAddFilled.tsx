import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAddFilled'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v219q0 18-15.5 28.5T832-469q-17-5-34.5-8t-36.5-3q-11 0-21 .5t-20 2.5v-83q0-33-23.5-56.5T640-640H390q-13 0-21.5 8.5T360-610q0 13 8.5 21.5T390-580h250q8 0 14 6t6 14v102q-17 8-31.5 17.5T600-419v-61q0-17-11.5-28.5T560-520H280q-17 0-28.5 11.5T240-480v120q0 17 11.5 28.5T280-320h254q-11 29-13.5 60t2.5 61q2 15-7 27t-23 12H160Zm560-40h-80q-17 0-28.5-11.5T600-240q0-17 11.5-28.5T640-280h80v-80q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v80h80q17 0 28.5 11.5T920-240q0 17-11.5 28.5T880-200h-80v80q0 17-11.5 28.5T760-80q-17 0-28.5-11.5T720-120v-80Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAddFilled.displayName = 'AmauiIconMaterialDesktopLandscapeAddFilled';

export default IconMaterialDesktopLandscapeAddFilled;
