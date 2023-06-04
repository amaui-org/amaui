import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffW100'

      short_name='OpenInNewOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 18.7 19.7H4.3V5.3L3.15 4.15l.5-.5 16.7 16.7ZM5 19h13l-6.25-6.25-2 2-.5-.5 2-2L5 6Zm14.7-2.1-.7-.7V13h.7Zm-6.05-6.05-.5-.5L18.5 5H14v-.7h5.7V10H19V5.5ZM7.8 5l-.7-.7H11V5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewOffW100.displayName = 'AmauiIconMaterialOpenInNewOffW100';

export default IconMaterialOpenInNewOffW100;
