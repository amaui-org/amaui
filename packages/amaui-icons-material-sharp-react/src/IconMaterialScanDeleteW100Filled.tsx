import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDeleteW100Filled'

      short_name='ScanDelete'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M572 404h148L572 256v148Zm64 519-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Zm-424 1V228h374l162 162v198q-6.65-1-13.65-1.5T720 586q-97.5 0-165.75 67.755T486 819q0 25 6 53.5t19 51.5H212Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteW100Filled.displayName = 'AmauiIconMaterialScanDeleteW100Filled';

export default IconMaterialScanDeleteW100Filled;
