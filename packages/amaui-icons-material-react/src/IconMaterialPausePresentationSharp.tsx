import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharp'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M9 16H11V8H9ZM13 16H15V8H13ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialPausePresentationSharp;
