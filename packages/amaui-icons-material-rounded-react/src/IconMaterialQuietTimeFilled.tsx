import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeFilled'

      short_name='QuietTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 23q-2.1 0-3.938-.8-1.837-.8-3.199-2.162Q4.6 18.675 3.8 16.837 3 15 3 12.9q0-3.2 1.8-5.8 1.8-2.6 4.825-3.65.55-.2 1.025.137.475.338.45.913-.075 2.125.675 4.05.75 1.925 2.25 3.425 1.5 1.5 3.425 2.25 1.925.75 4.05.675.575-.025.938.387.362.413.187.913-1.05 3.075-3.662 4.937Q16.35 23 13.1 23Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeFilled.displayName = 'AmauiIconMaterialQuietTimeFilled';

export default IconMaterialQuietTimeFilled;
