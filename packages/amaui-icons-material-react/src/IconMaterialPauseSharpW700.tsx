import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharpW700'
      short_name='Pause'

      {...props}
    >
      <path d="M12.975 20.525V3.475H20.525V20.525ZM3.475 20.525V3.475H11.025V20.525ZM16.125 17.375H17.375V6.625H16.125ZM6.625 17.375H7.875V6.625H6.625ZM6.625 6.625V17.375ZM16.125 6.625V17.375Z"/>
    </Icon>
  )
});

export default IconMaterialPauseSharpW700;
