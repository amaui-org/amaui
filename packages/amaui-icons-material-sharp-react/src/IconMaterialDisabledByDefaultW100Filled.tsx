import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100Filled'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm4.1-3.625 3.6-3.6 3.6 3.6.475-.475-3.6-3.6 3.6-3.6-.475-.475-3.6 3.6-3.6-3.6-.475.475 3.6 3.6-3.6 3.6Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100Filled.displayName = 'AmauiIconMaterialDisabledByDefaultW100Filled';

export default IconMaterialDisabledByDefaultW100Filled;
