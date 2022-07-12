import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharpW700Filled'
      short_name='Pause'

      {...props}
    >
      <path d="M12.975 20.525V3.475H20.525V20.525ZM3.475 20.525V3.475H11.025V20.525Z"/>
    </Icon>
  )
});

export default IconMaterialPauseSharpW700Filled;
