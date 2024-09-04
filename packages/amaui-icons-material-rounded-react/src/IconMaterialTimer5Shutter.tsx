import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5Shutter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5Shutter'

      short_name='Timer5Shutter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-200H380q-25 0-42.5-17.5T320-260q0-25 17.5-42.5T380-320h180v-100H380q-25 0-42.5-17.5T320-480v-220q0-25 17.5-42.5T380-760h240q25 0 42.5 17.5T680-700q0 25-17.5 42.5T620-640H440v100h120q50 0 85 35t35 85v100q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialTimer5Shutter.displayName = 'AmauiIconMaterialTimer5Shutter';

export default IconMaterialTimer5Shutter;
