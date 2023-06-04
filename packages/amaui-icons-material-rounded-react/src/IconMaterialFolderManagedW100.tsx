import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderManagedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderManagedW100'

      short_name='FolderManaged'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 784v32-400 368Zm32 60q-26 0-43-17t-17-43V408q0-26 17-43t43-17h223q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v80q-7-4-13.5-7t-14.5-6v-67q0-12-10-22t-22-10H160v368q0 12 10 22t22 10h265q2 8 4 14.5t5 13.5H192Zm513-5q36 0 62-26t26-62q0-36-26-62t-62-26q-36 0-62 26t-26 62q0 36 26 62t62 26Zm-1 54q-5 0-9.5-4t-4.5-9l-1-15q-26-5-42-14t-30-26l-16 7q-5 2-9 1t-7-5l-2-3q-3-5-3-9.5t5-8.5l12-10q-8-24-8-46t8-46l-12-10q-4-3-5-7.5t2-9.5l3-4q3-4 7-5t9 1l16 7q14-18 30-26.5t42-13.5l1-15q0-5 4.5-9t9.5-4h2q5 0 9.5 4t4.5 9l1 15q26 5 42 13.5t30 26.5l16-7q5-2 9-1t7 5l2 3q3 5 3 9.5t-5 8.5l-12 10q8 24 8 46t-8 46l12 10q4 3 5 7.5t-2 9.5l-3 4q-3 4-7 5t-9-1l-16-7q-14 17-30 26t-42 14l-1 15q0 5-4.5 9t-9.5 4h-2Z"/>
    </Icon>
  );
});

IconMaterialFolderManagedW100.displayName = 'AmauiIconMaterialFolderManagedW100';

export default IconMaterialFolderManagedW100;
