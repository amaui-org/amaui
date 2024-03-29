import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanDeleteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDeleteFilled'

      short_name='ScanDelete'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 456h200L520 256v200Zm116 500-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-476 20V176h400l240 240v174q-19-7-39-10.5t-41-3.5q-100 0-170 69.5T480 815q0 45 16 86.5t46 74.5H160Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteFilled.displayName = 'AmauiIconMaterialScanDeleteFilled';

export default IconMaterialScanDeleteFilled;
