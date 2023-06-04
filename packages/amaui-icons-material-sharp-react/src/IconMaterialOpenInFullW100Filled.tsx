import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullW100Filled'

      short_name='OpenInFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-6.7h.7v5.525L19.175 4.35H13.65v-.7h6.7v6.7h-.7V4.825L4.825 19.65h5.525v.7Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullW100Filled.displayName = 'AmauiIconMaterialOpenInFullW100Filled';

export default IconMaterialOpenInFullW100Filled;
