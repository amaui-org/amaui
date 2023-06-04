import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxW100Filled'

      short_name='IndeterminateCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 12.35h8.7v-.7h-8.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxW100Filled.displayName = 'AmauiIconMaterialIndeterminateCheckBoxW100Filled';

export default IconMaterialIndeterminateCheckBoxW100Filled;
