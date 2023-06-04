import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyW100Filled'

      short_name='MobileFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 15.1-3.35-3.35.5-.5 2.85 2.85 5.7-5.7.5.5ZM5.3 21.7V2.3h11.4v4.6H16V5.35H6v13.3h10V17.1h.7v4.6Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyW100Filled.displayName = 'AmauiIconMaterialMobileFriendlyW100Filled';

export default IconMaterialMobileFriendlyW100Filled;
