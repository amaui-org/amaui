import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRunW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunW100Filled'

      short_name='DirectionsRun'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.1q-.675 0-1.137-.463Q11.9 4.175 11.9 3.5t.463-1.138Q12.825 1.9 13.5 1.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm.15 17.25v-5.575L10.5 13.75l-1.1 4.9-5.65-1.15.15-.675 4.8.975 1.95-10-3.3 1.375v3.175h-.7V8.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.625 1 1.737 1.75 1.113.75 2.463.9v.7q-1.325-.125-2.725-.938-1.4-.812-2.45-2.637L12.2 13.7l2.15 2.1v6.55Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunW100Filled.displayName = 'AmauiIconMaterialDirectionsRunW100Filled';

export default IconMaterialDirectionsRunW100Filled;
