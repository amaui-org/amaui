import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharpW700Filled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M8.625 16.2H11V7.8H8.625ZM13 16.2H15.375V7.8H13ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialPausePresentationSharpW700Filled;
