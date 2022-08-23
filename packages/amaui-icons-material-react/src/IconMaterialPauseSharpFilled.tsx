import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharpFilled'
      short_name='Pause'

      {...props}
    >
      <path d="M13 19V5H19V19ZM5 19V5H11V19Z"/>
    </Icon>
  );
});

IconMaterialPauseSharpFilled.displayName = 'AmauiIconMaterialPauseSharpFilled';

export default IconMaterialPauseSharpFilled;
