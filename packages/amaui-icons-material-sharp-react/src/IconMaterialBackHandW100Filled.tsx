import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100Filled'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22.1q-2.475 0-4.212-1.35Q7.05 19.4 6.225 16.9l-1.8-5.45 1.9-.675L8 15.25h.7V4.1h2.05V12h.7V1.8h2.05V12h.7V2.7h2.1V12h.7V5.45h2.1V16q0 3.075-1.513 4.587Q16.075 22.1 13 22.1Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100Filled.displayName = 'AmauiIconMaterialBackHandW100Filled';

export default IconMaterialBackHandW100Filled;
