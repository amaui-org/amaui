import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExclamationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationW100Filled'

      short_name='Exclamation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.1V6.4h.7v7.7Zm0 3.5v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialExclamationW100Filled.displayName = 'AmauiIconMaterialExclamationW100Filled';

export default IconMaterialExclamationW100Filled;
