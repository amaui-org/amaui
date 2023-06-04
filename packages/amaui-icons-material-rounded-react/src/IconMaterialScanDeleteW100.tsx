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
      <path d="M240 256v148-148 640-640Zm32 668q-26 0-43-17t-17-43V288q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v173q-7-1-14-1.5t-14-.5V404H602q-13 0-21.5-8.5T572 374V256H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h227q2 8 5 14.5t7 13.5H272Zm448-84-75 74q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l74 75 75-75q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9l-74 75 74 75q4 4 3.5 9.5T813 914q-4 4-9 4t-9-4l-75-74Z"/>
    </Icon>
  );
});

IconMaterialScanDeleteW100.displayName = 'AmauiIconMaterialScanDeleteW100';

export default IconMaterialScanDeleteW100;
