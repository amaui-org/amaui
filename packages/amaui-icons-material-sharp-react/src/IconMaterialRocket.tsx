import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rocket'

      short_name='Rocket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 19.05 1.975-.8q-.25-.725-.462-1.475-.213-.75-.338-1.5l-1.175.8ZM10 18h4q.45-1 .725-2.438.275-1.437.275-2.937 0-2.475-.825-4.688Q13.35 5.725 12 4.525q-1.35 1.2-2.175 3.412Q9 10.15 9 12.625q0 1.5.275 2.937Q9.55 17 10 18Zm2-5q-.825 0-1.412-.588Q10 11.825 10 11t.588-1.413Q11.175 9 12 9t1.413.587Q14 10.175 14 11q0 .825-.587 1.412Q12.825 13 12 13Zm6 6.05v-2.975l-1.175-.8q-.125.75-.337 1.5-.213.75-.463 1.475ZM12 1.975q2.475 1.8 3.738 4.575Q17 9.325 17 13l2.1 1.4q.425.275.663.725.237.45.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95.237-.45.662-.725L7 13q0-3.675 1.262-6.45Q9.525 3.775 12 1.975Z"/>
    </Icon>
  );
});

IconMaterialRocket.displayName = 'AmauiIconMaterialRocket';

export default IconMaterialRocket;
