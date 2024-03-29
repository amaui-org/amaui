import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogout = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Logout'

      short_name='Logout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.325 16.275q-.275-.325-.275-.738 0-.412.275-.687l1.85-1.85H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h7.175l-1.85-1.85q-.3-.3-.3-.712 0-.413.3-.713.275-.3.688-.3.412 0 .687.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.325.325-.712.287-.388-.037-.663-.312ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H5v14h6q.425 0 .713.288.287.287.287.712t-.287.712Q11.425 21 11 21Z"/>
    </Icon>
  );
});

IconMaterialLogout.displayName = 'AmauiIconMaterialLogout';

export default IconMaterialLogout;
