import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeFilled'

      short_name='DonutLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.975 11Q18.625 8.65 17 7t-3.975-1.95v-3q3.575.35 6.088 2.862Q21.625 7.425 21.975 11Zm-5.95 10.95v-3q2.35-.3 3.975-1.95t1.975-4h3q-.35 3.575-2.862 6.087Q16.6 21.6 13.025 21.95Zm-2 0q-3.85-.375-6.425-3.225Q2.025 15.875 2.025 12q0-3.875 2.575-6.725 2.575-2.85 6.425-3.225v3q-2.6.35-4.3 2.325-1.7 1.975-1.7 4.625t1.7 4.625q1.7 1.975 4.3 2.325Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeFilled.displayName = 'AmauiIconMaterialDonutLargeFilled';

export default IconMaterialDonutLargeFilled;
