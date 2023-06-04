import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 15.7v-3h-3V12h3V9h.7v3h3v.7h-3v3Zm-14.7-3V5.3h15.4v1.2H19V6H5v6h8.5v.7ZM5 9.5V6v6-2.5Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100.displayName = 'AmauiIconMaterialVariablesW100';

export default IconMaterialVariablesW100;
