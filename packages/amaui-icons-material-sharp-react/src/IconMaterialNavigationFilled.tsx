import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationFilled'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5 21-1-1 8-18 8 18-1 1-7-3Z"/>
    </Icon>
  );
});

IconMaterialNavigationFilled.displayName = 'AmauiIconMaterialNavigationFilled';

export default IconMaterialNavigationFilled;
