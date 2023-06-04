import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkW100'

      short_name='DirectionsWalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.1q-.675 0-1.137-.463Q11.9 4.175 11.9 3.5t.463-1.138Q12.825 1.9 13.5 1.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463ZM7.85 22.35l2.8-14.55-3.3 1.375v3.175h-.7V8.7l4.425-1.825q.625-.275 1.175-.188.55.088.9.663l.975 1.575q.625 1.025 1.75 1.775t2.475.9v.7q-1.325-.125-2.725-.938-1.4-.812-2.45-2.637L12.2 13.7l2.15 2.1v6.55h-.7v-5.575L10.5 13.75l-1.95 8.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkW100.displayName = 'AmauiIconMaterialDirectionsWalkW100';

export default IconMaterialDirectionsWalkW100;
