import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDown'

      short_name='OpenInNewDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v240q0 17-11.5 28.5T800 576q-17 0-28.5-11.5T760 536V296H200v560h240q17 0 28.5 11.5T480 896q0 17-11.5 28.5T440 936H200Zm504-80L360 512q-11-11-11.5-27.5T360 456q11-11 28-11t28 11l344 343V696q0-17 11.5-28.5T800 656q17 0 28.5 11.5T840 696v200q0 17-11.5 28.5T800 936H600q-17 0-28.5-11.5T560 896q0-17 11.5-28.5T600 856h104Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDown.displayName = 'AmauiIconMaterialOpenInNewDown';

export default IconMaterialOpenInNewDown;
