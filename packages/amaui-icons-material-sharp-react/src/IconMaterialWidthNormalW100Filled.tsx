import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalW100Filled'

      short_name='WidthNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h5.3V6H4Zm10.7 0H20V6h-5.3Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalW100Filled.displayName = 'AmauiIconMaterialWidthNormalW100Filled';

export default IconMaterialWidthNormalW100Filled;
