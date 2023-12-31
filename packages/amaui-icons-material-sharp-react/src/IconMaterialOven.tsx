import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOven = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Oven'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-680q17 0 28.5-11.5T680-720q0-17-11.5-28.5T640-760q-17 0-28.5 11.5T600-720q0 17 11.5 28.5T640-680Zm-160 0q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm-160 0q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680ZM200-560v360h560v-360H200Zm200 160h160v-80H400v80ZM120-120v-720h720v720H120Zm360-440Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialOven.displayName = 'AmauiIconMaterialOven';

export default IconMaterialOven;
