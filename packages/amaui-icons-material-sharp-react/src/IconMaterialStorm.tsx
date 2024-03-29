import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Storm'

      short_name='Storm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 22q.625-1.575.875-3.188.25-1.612.125-3.262-.95 2.05-2.9 3.25Q14.3 20 12 20q-2.1 0-3.8-.988-1.7-.987-2.9-2.637t-1.85-3.788Q2.8 10.45 2.8 8.15q0-1.575.213-3.113Q3.225 3.5 3.75 2h2.1q-.6 1.55-.862 3.175Q4.725 6.8 4.85 8.45q.975-2.075 2.913-3.262Q9.7 4 12 4q2.1 0 3.8.987 1.7.988 2.9 2.625 1.2 1.638 1.85 3.775.65 2.138.65 4.463 0 1.575-.212 3.112Q20.775 20.5 20.25 22ZM12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-2q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialStorm.displayName = 'AmauiIconMaterialStorm';

export default IconMaterialStorm;
