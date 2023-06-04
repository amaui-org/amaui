import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDeleteW100'

      short_name='ScanDelete'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 256v148-148 640-640Zm-28 668V228h374l162 162v198q-6.65-1-13.65-1.5T720 586V404H572V256H240v640h259q2 7.667 5 14.333Q507 917 511 924H212Zm424-1-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteW100.displayName = 'AmauiIconMaterialScanDeleteW100';

export default IconMaterialScanDeleteW100;
