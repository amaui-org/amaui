import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseOutlinedW100'
      short_name='Pause'

      {...props}
    >
      <path d="M14.65 17.7V6.3H17.45V17.7ZM6.55 17.7V6.3H9.35V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialPauseOutlinedW100;
