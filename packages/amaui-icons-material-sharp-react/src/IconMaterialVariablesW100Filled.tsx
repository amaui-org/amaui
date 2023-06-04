import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariablesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariablesW100Filled'

      short_name='Variables'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 15.7v-3h-3V12h3V9h.7v3h3v.7h-3v3Zm-14.7-3V5.3h15.4v1.2h-3.2v3h-3v3.2Z"/>
    </Icon>
  );
});

IconMaterialVariablesW100Filled.displayName = 'AmauiIconMaterialVariablesW100Filled';

export default IconMaterialVariablesW100Filled;
