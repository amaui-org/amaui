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
      <path d="M120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160H120Zm80 480q-33 0-56.5-23.5T120-200v-360h720v360q0 33-23.5 56.5T760-120H200Zm120-560q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680Zm120 280h80q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400Zm40-280q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm160 0q17 0 28.5-11.5T680-720q0-17-11.5-28.5T640-760q-17 0-28.5 11.5T600-720q0 17 11.5 28.5T640-680Z"/>
    </Icon>
  );
});

IconMaterialOvenFilled.displayName = 'AmauiIconMaterialOvenFilled';

export default IconMaterialOvenFilled;
