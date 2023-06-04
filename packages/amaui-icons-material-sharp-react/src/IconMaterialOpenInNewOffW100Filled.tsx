import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffW100Filled'

      short_name='OpenInNewOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.85 20.85-1.2-1.15H4.3V5.35l-1.15-1.2.5-.5 16.7 16.7ZM5 19h13l-6.25-6.25-2 2-.5-.5 2-2L5 6Zm14.7-2.1-.7-.7V13h.7Zm-6.05-6.05-.5-.5L18.5 5H14v-.7h5.7V10H19V5.5ZM7.8 5l-.7-.7H11V5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffW100Filled.displayName = 'AmauiIconMaterialOpenInNewOffW100Filled';

export default IconMaterialOpenInNewOffW100Filled;
