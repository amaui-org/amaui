import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewW100Filled'

      short_name='OpenInNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3H11V5H5v14h14v-6h.7v6.7Zm5.45-4.95-.5-.5L18.5 5H14v-.7h5.7V10H19V5.5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewW100Filled.displayName = 'AmauiIconMaterialOpenInNewW100Filled';

export default IconMaterialOpenInNewW100Filled;
