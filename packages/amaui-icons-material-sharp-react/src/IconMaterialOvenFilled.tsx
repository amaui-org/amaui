import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenFilled'

      short_name='Oven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-600v-240h720v240H120Zm0 480v-440h720v440H120Zm200-560q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680Zm80 280h160v-80H400v80Zm80-280q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm160 0q17 0 28.5-11.5T680-720q0-17-11.5-28.5T640-760q-17 0-28.5 11.5T600-720q0 17 11.5 28.5T640-680Z"/>
    </Icon>
  );
});

IconMaterialOvenFilled.displayName = 'AmauiIconMaterialOvenFilled';

export default IconMaterialOvenFilled;
