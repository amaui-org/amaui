import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveDown'

      short_name='TextSelectMoveDown'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 296q-17 0-28.5-11.5T120 256q0-17 11.5-28.5T160 216h640q17 0 28.5 11.5T840 256q0 17-11.5 28.5T800 296H160Zm292 452L348 644q-11-11-11.5-27.5T348 588q11-11 28-11t28 11l36 35V416q0-17 11.5-28.5T480 376q17 0 28.5 11.5T520 416v207l36-36q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L508 748q-12 12-28 12t-28-12ZM160 936q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856h640q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H160Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveDown.displayName = 'AmauiIconMaterialTextSelectMoveDown';

export default IconMaterialTextSelectMoveDown;
