import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseOutlinedFilled'
      short_name='Pause'

      {...props}
    >
      <path d="M13 19V5H19V19ZM5 19V5H11V19Z"/>
    </Icon>
  )
});

export default IconMaterialPauseOutlinedFilled;
