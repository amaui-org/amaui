import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100'

      short_name='DisabledByDefault'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V5H5Zm-.7.7V4.3h15.4v15.4Zm4.1-3.625 3.6-3.6 3.6 3.6.475-.475-3.6-3.6 3.6-3.6-.475-.475-3.6 3.6-3.6-3.6-.475.475 3.6 3.6-3.6 3.6ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100.displayName = 'AmauiIconMaterialDisabledByDefaultW100';

export default IconMaterialDisabledByDefaultW100;
