import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListBulletedAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulletedAddFilled'

      short_name='FormatListBulletedAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 7.5q-.625 0-1.062-.438Q2 6.625 2 6t.438-1.062Q2.875 4.5 3.5 4.5t1.062.438Q5 5.375 5 6t-.438 1.062Q4.125 7.5 3.5 7.5Zm0 6q-.625 0-1.062-.438Q2 12.625 2 12t.438-1.062Q2.875 10.5 3.5 10.5t1.062.438Q5 11.375 5 12t-.438 1.062q-.437.438-1.062.438Zm0 6q-.625 0-1.062-.438Q2 18.625 2 18t.438-1.062Q2.875 16.5 3.5 16.5t1.062.438Q5 17.375 5 18t-.438 1.062q-.437.438-1.062.438ZM7 7V5h13v2Zm0 6v-2h11q-1.425 0-2.675.537-1.25.538-2.2 1.463Zm0 6v-2h4.075Q11 17.5 11 18t.075 1Zm11 4q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulletedAddFilled.displayName = 'AmauiIconMaterialFormatListBulletedAddFilled';

export default IconMaterialFormatListBulletedAddFilled;
