import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroW100Filled'

      short_name='Euro'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.05 19.7q-2.875 0-4.862-1.588Q8.2 16.525 7.45 14.1h-3.5v-.7h3.375q-.125-.575-.112-1.388.012-.812.112-1.412H3.95v-.7H7.5q.725-2.425 2.7-4.013Q12.175 4.3 15.05 4.3q1.425 0 2.7.45 1.275.45 2.325 1.25l-.5.475q-.95-.7-2.1-1.088Q16.325 5 15.05 5q-2.6 0-4.362 1.425Q8.925 7.85 8.225 9.9H14.9v.7H8.05q-.125.575-.125 1.4t.125 1.4h6.85v.7H8.2q.725 2.05 2.488 3.475Q12.45 19 15.05 19q1.275 0 2.425-.387 1.15-.388 2.1-1.088l.5.475q-1.05.8-2.325 1.25-1.275.45-2.7.45Z"/>
    </Icon>
  );
});

IconMaterialEuroW100Filled.displayName = 'AmauiIconMaterialEuroW100Filled';

export default IconMaterialEuroW100Filled;
