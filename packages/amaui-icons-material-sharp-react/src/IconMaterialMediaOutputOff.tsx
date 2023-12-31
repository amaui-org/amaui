import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaOutputOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputOff'

      short_name='MediaOutputOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-560ZM400-80v-240q0-51 19-94.5t51-75.5l43 43q-25 25-39 57t-14 70v40h100v200H400ZM80-160v-640h80v560h160v80H80Zm503-331-46-46q23-11 49-17t54-6q100 0 170 70t70 170v126l-60-60v-66q0-75-52.5-127.5T640-500q-15 0-29 2t-28 7ZM320-281q-51-8-85.5-46.5T200-420q0-58 41-99t99-41q19 0 36.5 4.5T409-542q-14 15-26.5 31.5T360-476q-5-2-10-3t-10-1q-25 0-42.5 17.5T280-420q0 20 12 36t31 21q-2 11-2.5 21.5T320-320v39Zm-46-519-80-80h406v242q-21 2-41 7.5T520-617v-183H274Zm137 102ZM820-28 28-820l56-56L876-84l-56 56Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputOff.displayName = 'AmauiIconMaterialMediaOutputOff';

export default IconMaterialMediaOutputOff;
