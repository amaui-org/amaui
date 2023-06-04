import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnW100Filled'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.025 17.7V6.3H19.7v11.4Zm-5.35 0V6.3h4.65v11.4Zm-5.375 0V6.3h4.675v11.4Z"/>
    </Icon>
  );
});

IconMaterialViewColumnW100Filled.displayName = 'AmauiIconMaterialViewColumnW100Filled';

export default IconMaterialViewColumnW100Filled;
