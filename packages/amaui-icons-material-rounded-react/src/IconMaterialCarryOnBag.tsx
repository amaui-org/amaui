import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBag'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-280q50 0 85 35t35 85q0 50-35 85t-85 35q-38 0-68.5-22T527-120H320q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h240v-120h-40q-17 0-28.5-11.5T480-840q0-17 11.5-28.5T520-880h80q17 0 28.5 11.5T640-840v560Zm-280 80v-400h-40v400h40Zm80-400v400h87q4-15 13-27.5t20-22.5v-350H440Zm200 500q25 0 42.5-17.5T700-160q0-25-17.5-42.5T640-220q-25 0-42.5 17.5T580-160q0 25 17.5 42.5T640-100Zm0-60ZM440-400Zm-80 200v-400 400Zm80-400v400-400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBag.displayName = 'AmauiIconMaterialCarryOnBag';

export default IconMaterialCarryOnBag;
