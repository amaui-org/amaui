import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieFilled'

      short_name='Cookie'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 10q.625 0 1.062-.438Q12 9.125 12 8.5t-.438-1.062Q11.125 7 10.5 7t-1.062.438Q9 7.875 9 8.5t.438 1.062Q9.875 10 10.5 10Zm-2 5q.625 0 1.062-.438Q10 14.125 10 13.5t-.438-1.062Q9.125 12 8.5 12t-1.062.438Q7 12.875 7 13.5t.438 1.062Q7.875 15 8.5 15Zm6.5 1q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14t-.712.287Q14 14.575 14 15t.288.712Q14.575 16 15 16Zm-3 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-2.1.9-4.1.9-2 2.513-3.45Q7.025 3 9.238 2.325q2.212-.675 4.837-.125-.225 1.125.15 2.112.375.988 1.125 1.663t1.775.925q1.025.25 2.15-.125-.775 1.725.275 2.95T21.95 11q.225 2.225-.475 4.225-.7 2-2.062 3.5-1.363 1.5-3.275 2.388Q14.225 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCookieFilled.displayName = 'AmauiIconMaterialCookieFilled';

export default IconMaterialCookieFilled;
