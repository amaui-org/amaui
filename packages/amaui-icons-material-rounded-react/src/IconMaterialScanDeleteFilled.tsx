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
      <path d="M720 456 520 256v120q0 33 23.5 56.5T600 456h120Zm0 417-56 55q-11 11-27.5 11.5T608 928q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T832 704q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T832 928q-11 11-28 11t-28-11l-56-55ZM240 976q-33 0-56.5-23.5T160 896V256q0-33 23.5-56.5T240 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v141q-19-7-39.5-10.5T719 576q-100 0-169.5 69.5T480 815q0 45 16 86.5t46 74.5H240Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteFilled.displayName = 'AmauiIconMaterialScanDeleteFilled';

export default IconMaterialScanDeleteFilled;
