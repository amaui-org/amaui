import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100Filled'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 12.35v-.7h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100Filled.displayName = 'AmauiIconMaterialRemoveW100Filled';

export default IconMaterialRemoveW100Filled;
