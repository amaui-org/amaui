import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100Filled'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.35h.7v-4h4v-.7h-4v-4h-.7v4h-4v.7h4ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100Filled.displayName = 'AmauiIconMaterialAddBoxW100Filled';

export default IconMaterialAddBoxW100Filled;
