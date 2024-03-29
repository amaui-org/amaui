import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoTransfer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransfer'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 16.3 19.125h2.85V21H16v-2H8v2H5v-3.05q-.45-.5-.725-1.113Q4 16.225 4 15.5V6.825L.675 3.5 2.1 2.075l19.8 19.8ZM8 17h6.175l-5-5H6v3q0 .825.588 1.413Q7.175 17 8 17Zm11.725-.15L18 15.125V12h-3.125l-2-2H18V7H9.875l-2-2h9.775q-.375-.425-1.612-.713Q14.8 4 12.05 4q-1.775 0-2.887.15-1.113.15-1.763.375L5.875 3q.975-.5 2.488-.75Q9.875 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 .35-.075.688-.075.337-.2.662ZM8.5 16q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16ZM6 10h1.175L6 8.825Zm1.875-5h9.775Zm1.3 7Zm5.7 0Z"/>
    </Icon>
  );
});

IconMaterialNoTransfer.displayName = 'AmauiIconMaterialNoTransfer';

export default IconMaterialNoTransfer;
