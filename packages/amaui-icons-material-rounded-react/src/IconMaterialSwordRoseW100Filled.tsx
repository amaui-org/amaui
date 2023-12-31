import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwordRoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRoseW100Filled'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m603-516-87-87 217-216q5-5 10-7t11-2h44q13 0 21.5 8.5T828-798v44q0 6-2 11t-7 10L603-516ZM169-142l-28-28q-9-9-9-21t9-21l124-124-88-88 6-6q17-17 42-17t42 17l38 38 50-50 87 87-50 50 37 37q17 17 17 42t-17 42l-6 6-88-88-124 124q-9 9-21 9t-21-9Zm635 6L342-596q-35 26-79 24t-76-34l-43-44q30-29 72-29.5t72 29.5l54 54q3-2 5.5-5t5.5-5q2-2 4.5-5t4.5-5l-55-54q-38-38-91-37.5T125-669l-11-11 166-166 73 74q32 32 34.5 76.5T362-616l319 319q-11-27-14-55t3-57q9-41 34-75.5t59-57.5q11-7 23-4.5t19 13.5q21 34 31.5 75.5T839-376q-8 44-34.5 79T741-238l82 82q4 4 4.5 10t-4.5 10q-4 4-9.5 4t-9.5-4Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseW100Filled.displayName = 'AmauiIconMaterialSwordRoseW100Filled';

export default IconMaterialSwordRoseW100Filled;
