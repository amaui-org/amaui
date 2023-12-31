import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterRetroluxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterRetroluxFilled'

      short_name='FilterRetrolux'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m602-82-90-92q-17 42-52.5 68T380-80q-59 0-99.5-40.5T240-220q0-59 40.5-99.5T380-360q14 0 28 2t26 8L240-640l240-240 240 240-200 300v62l138 138-56 58Zm-222-78q25 0 42.5-17.5T440-220q0-25-17.5-42.5T380-280q-25 0-42.5 17.5T320-220q0 25 17.5 42.5T380-160Z"/>
    </Icon>
  );
});

IconMaterialFilterRetroluxFilled.displayName = 'AmauiIconMaterialFilterRetroluxFilled';

export default IconMaterialFilterRetroluxFilled;
