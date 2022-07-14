import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperModeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeSharpFilled'
      short_name='DeveloperMode'

      {...props}
    >
      <path d="M5 7V1H19V7H17V6H7V7ZM5 23V17H7V18H17V17H19V23ZM15.4 16.6 14 15.15 17.15 12 14 8.85 15.4 7.4 20 12ZM8.6 16.6 4 12 8.6 7.4 10 8.85 6.85 12 10 15.15Z"/>
    </Icon>
  );
});

export default IconMaterialDeveloperModeSharpFilled;
