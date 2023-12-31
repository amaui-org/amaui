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
      <path d="m603-516-20-20 217-217v-47h-47L536-583l-20-20 217-216q5-5 10-7t11-2h44q13 0 21.5 8.5T828-798v44q0 6-2 11t-7 10L603-516ZM169-142l-28-28q-9-9-9-21t9-21l124-124-88-88 6-6q17-17 42-17t42 17l38 38 50-50 20 20-50 50 47 47 50-50 20 20-50 50 37 37q17 17 17 42t-17 42l-6 6-88-88-124 124q-9 9-21 9t-21-9Zm643-238q8-37-2-72.5T781-520q-30 23-52.5 52T698-402q-8 36 2.5 71.5T729-263q32-21 53.5-51t29.5-66ZM207-626q23 23 56.5 26.5T323-615l-35-35q-25-25-59-29.5T166-667l41 41Zm73-180L173-700q35-13 71-5t63 35l35 35q20-26 18-59.5T333-752l-53-54Zm523 670L342-596q-35 26-79 24t-76-34l-73-74 166-166 73 74q32 32 34.5 76.5T362-616l319 319q-11-27-14-55t3-57q9-41 34-75.5t59-57.5q11-7 23-4.5t19 13.5q21 34 31.5 75.5T839-376q-8 44-34.5 79T741-238l82 82q4 4 4.5 10t-4.5 10q-4 4-10 4t-10-4ZM298-660Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseW100.displayName = 'AmauiIconMaterialSwordRoseW100';

export default IconMaterialSwordRoseW100;
