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
      <path d="M640-280q50 0 85 35t35 85q0 50-35 85t-85 35q-38 0-68.5-22T527-120H240v-560h320v-120h-80v-80h160v600Zm-280 80v-400h-40v400h40Zm80-400v400h87q4-15 13-27.5t20-22.5v-350H440Zm200 500q25 0 42.5-17.5T700-160q0-25-17.5-42.5T640-220q-25 0-42.5 17.5T580-160q0 25 17.5 42.5T640-100Zm0-60ZM440-400Zm-80 200v-400 400Zm80-400v400-400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBag.displayName = 'AmauiIconMaterialCarryOnBag';

export default IconMaterialCarryOnBag;
