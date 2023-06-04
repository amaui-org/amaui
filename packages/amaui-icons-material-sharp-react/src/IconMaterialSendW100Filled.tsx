import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendW100Filled'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.05v-4.9L9.5 12l-5.2-1.15v-4.9L18.65 12Z"/>
    </Icon>
  );
});

IconMaterialSendW100Filled.displayName = 'AmauiIconMaterialSendW100Filled';

export default IconMaterialSendW100Filled;
