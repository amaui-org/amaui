import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowercaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowercaseW100'

      short_name='Lowercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-262q-45 0-72.5-25.5T230-350q0-42 33-66.5t85-24.5q21 0 43 4.5t39 12.5v-27q0-42-19.5-63T352-535q-17 0-33.5 5.5T288-515q-5 4-10 2t-8-7q-3-5-2-10t7-9q17-11 37-16.5t40-5.5q54 0 80 28.5t26 85.5v162q0 6-4 10t-10 4q-6 0-10-4t-4-10v-28h-4q-18 26-40.5 38.5T330-262Zm0-26q43 0 71.5-31t28.5-79q-14-8-36-12.5t-43-4.5q-42 0-67 16.5T259-350q0 26 19.5 44t51.5 18Zm332-28v-278q0-6 4-10t10-4q6 0 10 4t4 10v278l80-80q4-4 9.5-4.5T790-396q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T562-396q5-5 10-5t10 5l80 80Z"/>
    </Icon>
  );
});

IconMaterialLowercaseW100.displayName = 'AmauiIconMaterialLowercaseW100';

export default IconMaterialLowercaseW100;
