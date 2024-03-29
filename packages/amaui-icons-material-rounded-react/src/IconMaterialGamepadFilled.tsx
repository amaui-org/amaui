import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGamepadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadFilled'

      short_name='Gamepad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m452 488-80-80q-6-6-9-13.5t-3-15.5V216q0-17 11.5-28.5T400 176h160q17 0 28.5 11.5T600 216v163q0 8-3 15.5t-9 13.5l-80 80q-12 12-28 12t-28-12Zm225 208q-8 0-15.5-3t-13.5-9l-80-80q-12-12-12-28t12-28l80-80q6-6 13.5-9t15.5-3h163q17 0 28.5 11.5T880 496v160q0 17-11.5 28.5T840 696H677Zm-557 0q-17 0-28.5-11.5T80 656V496q0-17 11.5-28.5T120 456h163q8 0 15.5 3t13.5 9l80 80q12 12 12 28t-12 28l-80 80q-6 6-13.5 9t-15.5 3H120Zm280 280q-17 0-28.5-11.5T360 936V773q0-8 3-15.5t9-13.5l80-80q12-12 28-12t28 12l80 80q6 6 9 13.5t3 15.5v163q0 17-11.5 28.5T560 976H400Z"/>
    </Icon>
  );
});

IconMaterialGamepadFilled.displayName = 'AmauiIconMaterialGamepadFilled';

export default IconMaterialGamepadFilled;
