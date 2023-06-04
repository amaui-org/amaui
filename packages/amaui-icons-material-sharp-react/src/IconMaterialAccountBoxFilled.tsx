import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxFilled'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q1.45 0 2.475-1.025Q15.5 10.95 15.5 9.5q0-1.45-1.025-2.475Q13.45 6 12 6q-1.45 0-2.475 1.025Q8.5 8.05 8.5 9.5q0 1.45 1.025 2.475Q10.55 13 12 13Zm-9 8V3h18v18Zm2-2h14v-1.15q-1.35-1.325-3.137-2.088Q14.075 15 12 15t-3.862.762Q6.35 16.525 5 17.85Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxFilled.displayName = 'AmauiIconMaterialAccountBoxFilled';

export default IconMaterialAccountBoxFilled;
