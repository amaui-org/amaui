import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100Filled'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.425 18.975q-.075.05-.175.025-.1-.025-.15-.075-.05-.05-.087-.137-.038-.088.012-.163l5.3-11.875q.2-.45.675-.45.475 0 .675.45l5.3 11.875q.05.075.013.163-.038.087-.088.137-.05.05-.15.075-.1.025-.175-.025L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100Filled.displayName = 'AmauiIconMaterialNavigationW100Filled';

export default IconMaterialNavigationW100Filled;
