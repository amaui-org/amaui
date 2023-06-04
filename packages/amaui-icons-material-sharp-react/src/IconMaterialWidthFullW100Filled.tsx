import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullW100Filled'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h1.55V6H4Zm14.45 0H20V6h-1.55Z"/>
    </Icon>
  );
});

IconMaterialWidthFullW100Filled.displayName = 'AmauiIconMaterialWidthFullW100Filled';

export default IconMaterialWidthFullW100Filled;
