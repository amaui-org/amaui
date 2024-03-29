import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarCrash'

      short_name='CarCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 11q-2.075 0-3.537-1.463Q13 8.075 13 6q0-2.05 1.45-3.525T18 1q2.075 0 3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11Zm-.5-4h1V3h-1ZM3 20v-9l2.45-7h5.85q-.15.475-.225.975Q11 5.475 11 6H6.85L5.8 9h5.875q.275.575.637 1.075.363.5.813.925H5v5h14v-3.075q.525-.075 1.025-.225.5-.15.975-.375V20h-3v-2H6v2ZM18 9q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q18.2 8 18 8q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM7.5 15q.625 0 1.062-.438Q9 14.125 9 13.5t-.438-1.062Q8.125 12 7.5 12t-1.062.438Q6 12.875 6 13.5t.438 1.062Q6.875 15 7.5 15Zm9 0q.625 0 1.062-.438Q18 14.125 18 13.5q0-.125-.012-.25-.013-.125-.063-.25-.675 0-1.312-.125-.638-.125-1.213-.375-.2.2-.3.462-.1.263-.1.538 0 .625.438 1.062.437.438 1.062.438ZM5 16v-5 5Z"/>
    </Icon>
  );
});

IconMaterialCarCrash.displayName = 'AmauiIconMaterialCarCrash';

export default IconMaterialCarCrash;
