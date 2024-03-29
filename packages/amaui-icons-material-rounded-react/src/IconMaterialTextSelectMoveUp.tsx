import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveUp'

      short_name='TextSelectMoveUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 936H160q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856h640q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936ZM440 529l-36 36q-11 11-27.5 11T348 564q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612 564q-11 11-28 11t-28-11l-36-35v207q0 17-11.5 28.5T480 776q-17 0-28.5-11.5T440 736V529Zm360-233H160q-17 0-28.5-11.5T120 256q0-17 11.5-28.5T160 216h640q17 0 28.5 11.5T840 256q0 17-11.5 28.5T800 296Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveUp.displayName = 'AmauiIconMaterialTextSelectMoveUp';

export default IconMaterialTextSelectMoveUp;
