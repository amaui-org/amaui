import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationSharpFilled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M9 16H11V8H9ZM13 16H15V8H13ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialPausePresentationSharpFilled;
