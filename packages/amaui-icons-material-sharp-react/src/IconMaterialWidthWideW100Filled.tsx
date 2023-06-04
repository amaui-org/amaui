import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWideW100Filled'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h3.3V6H4Zm12.7 0H20V6h-3.3Z"/>
    </Icon>
  );
});

IconMaterialWidthWideW100Filled.displayName = 'AmauiIconMaterialWidthWideW100Filled';

export default IconMaterialWidthWideW100Filled;
