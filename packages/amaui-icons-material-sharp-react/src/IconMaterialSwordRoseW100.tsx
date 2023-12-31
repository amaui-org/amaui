import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwordRoseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRoseW100'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m603-516-20-20 217-217v-47h-47L536-583l-20-20 226-225h86v86L603-516ZM190-121l-70-70 145-145-88-88 48-48 80 80 50-50 20 20-50 50 47 47 50-50 20 20-50 50 79 79-48 48-88-88-145 145Zm622-259q8-37-2-72.5T781-520q-30 23-52.5 52T698-402q-8 36 2.5 71.5T729-263q32-21 53.5-51t29.5-66ZM207-626q23 23 56.5 26.5T323-615l-35-35q-25-25-59-29.5T166-667l41 41Zm73-180L173-700q35-13 71-5t63 35l35 35q20-26 18-59.5T333-752l-53-54Zm528 674L342-596q-35 26-79 24t-76-34l-73-74 166-166 73 74q32 32 34.5 76.5T362-616l319 319q-11-27-14-55t3-57q5-24 16-46t27-40.5q16-18.5 35-34.5t41-29q29 41 44.5 88t5.5 95q-8 44-34.5 79T741-238l87 87-20 19ZM298-660Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseW100.displayName = 'AmauiIconMaterialSwordRoseW100';

export default IconMaterialSwordRoseW100;
