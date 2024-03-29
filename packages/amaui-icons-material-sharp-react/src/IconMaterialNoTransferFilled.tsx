import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoTransferFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferFilled'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 16.3 19.125h2.85V21H16v-2H8v2H5v-3.05q-.45-.5-.725-1.113Q4 16.225 4 15.5V6.825L.675 3.5 2.1 2.075l19.8 19.8Zm-.75-6.45L12.875 10H18V7H9.875l-4-4q.975-.5 2.488-.75Q9.875 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 .35-.075.688-.075.337-.2.662ZM8.5 16q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16ZM6 10h1.175L6 8.825Z"/>
    </Icon>
  );
});

IconMaterialNoTransferFilled.displayName = 'AmauiIconMaterialNoTransferFilled';

export default IconMaterialNoTransferFilled;
