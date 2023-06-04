import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageW100Filled'

      short_name='Image'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialImageW100Filled.displayName = 'AmauiIconMaterialImageW100Filled';

export default IconMaterialImageW100Filled;
