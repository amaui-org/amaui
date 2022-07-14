import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharpW100'
      short_name='Dock'

      {...props}
    >
      <path d="M8.65 20.9V20.2H15.35V20.9ZM7.3 18.2V2.8H16.7V18.2ZM8 17.5H16V15.85H8ZM8 15.15H16V5.85H8ZM8 5.15H16V3.5H8ZM8 5.15V3.5V5.15ZM8 17.5V15.85V17.5Z"/>
    </Icon>
  );
});

export default IconMaterialDockSharpW100;
