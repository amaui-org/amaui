import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharpW100Filled'
      short_name='Pause'

      {...props}
    >
      <path d="M13.65 17.7V6.3H17.7V17.7ZM6.3 17.7V6.3H10.35V17.7Z"/>
    </Icon>
  );
});

export default IconMaterialPauseSharpW100Filled;
