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
      <path d="M720 404 572 256v118q0 13 8.5 21.5T602 404h118Zm0 436-75 74q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l74 75 75-75q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9l-74 75 74 75q4 4 3.5 9.5T813 914q-4 4-9 4t-9-4l-75-74Zm-448 84q-26 0-43-17t-17-43V288q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v173q-8-1-14.5-1.5T719 586q-97 0-165 68t-68 165q0 25 6 53.5t19 51.5H272Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteW100Filled.displayName = 'AmauiIconMaterialScanDeleteW100Filled';

export default IconMaterialScanDeleteW100Filled;
