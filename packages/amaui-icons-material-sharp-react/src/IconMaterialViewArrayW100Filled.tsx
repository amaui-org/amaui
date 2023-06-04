import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayW100Filled'

      short_name='ViewArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 17.7V6.3h1.7v11.4Zm-9.7 0V6.3h7.4v11.4Zm-4 0V6.3H6v11.4Z"/>
    </Icon>
  );
});

IconMaterialViewArrayW100Filled.displayName = 'AmauiIconMaterialViewArrayW100Filled';

export default IconMaterialViewArrayW100Filled;
