import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneW100Filled'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.65 16.35h.7v-8.7h-2.7v.7h2Zm7.05 3.35H4.3V4.3h15.4Z"/>
    </Icon>
  );
});

IconMaterialLooksOneW100Filled.displayName = 'AmauiIconMaterialLooksOneW100Filled';

export default IconMaterialLooksOneW100Filled;
