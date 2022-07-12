import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseOutlinedW700'
      short_name='Pause'

      {...props}
    >
      <path d="M13.975 20.525V3.475H20.275V20.525ZM3.725 20.525V3.475H10.025V20.525Z"/>
    </Icon>
  )
});

export default IconMaterialPauseOutlinedW700;
