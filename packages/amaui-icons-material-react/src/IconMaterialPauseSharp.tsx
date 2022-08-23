import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseSharp'
      short_name='Pause'

      {...props}
    >
      <path d="M13 19V5H19V19ZM5 19V5H11V19ZM15 17H17V7H15ZM7 17H9V7H7ZM7 7V17ZM15 7V17Z"/>
    </Icon>
  );
});

IconMaterialPauseSharp.displayName = 'AmauiIconMaterialPauseSharp';

export default IconMaterialPauseSharp;
