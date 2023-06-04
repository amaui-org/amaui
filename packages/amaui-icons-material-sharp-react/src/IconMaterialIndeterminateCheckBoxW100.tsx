import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxW100'

      short_name='IndeterminateCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 12.35h8.7v-.7h-8.7ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxW100.displayName = 'AmauiIconMaterialIndeterminateCheckBoxW100';

export default IconMaterialIndeterminateCheckBoxW100;
