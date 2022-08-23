import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraSharpW100'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M9.9 16.15 10.4 15.65 8.15 13.4H15.85L13.6 15.65L14.1 16.15L17.2 13.05L14.1 9.95L13.6 10.45L15.85 12.7H8.15L10.4 10.45L9.9 9.95L6.8 13.05ZM3.3 19.7V6.3H7.7L9.55 4.3H14.45L16.3 6.3H20.7V19.7ZM4 19H20V7H4ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraSharpW100.displayName = 'AmauiIconMaterialSwitchCameraSharpW100';

export default IconMaterialSwitchCameraSharpW100;
