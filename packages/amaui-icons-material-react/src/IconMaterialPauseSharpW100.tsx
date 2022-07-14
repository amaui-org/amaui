import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharpW100'
      short_name='Pause'

      {...props}
    >
      <path d="M13.65 17.7V6.3H17.7V17.7ZM6.3 17.7V6.3H10.35V17.7ZM14.35 17H17V7H14.35ZM7 17H9.65V7H7ZM7 7V17ZM14.35 7V17Z"/>
    </Icon>
  );
});

export default IconMaterialPauseSharpW100;
