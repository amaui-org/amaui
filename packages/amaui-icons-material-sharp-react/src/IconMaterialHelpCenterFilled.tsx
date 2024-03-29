import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterFilled'

      short_name='HelpCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm9-3q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q12.525 15.5 12 15.5t-.887.363q-.363.362-.363.887t.363.887Q11.475 18 12 18Zm-.9-3.85h1.85q0-.9.2-1.325.2-.425.85-1.075.875-.875 1.238-1.463.362-.587.362-1.337 0-1.325-.9-2.138Q13.8 6 12.275 6q-1.375 0-2.337.675Q8.975 7.35 8.6 8.55l1.65.65q.175-.675.7-1.088.525-.412 1.225-.412.675 0 1.125.362.45.363.45.963 0 .425-.275.9-.275.475-.925 1.05-.825.725-1.137 1.387-.313.663-.313 1.788Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterFilled.displayName = 'AmauiIconMaterialHelpCenterFilled';

export default IconMaterialHelpCenterFilled;
