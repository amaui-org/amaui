import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayPauseOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayPauseOutlinedW700'
      short_name='PlayPause'

      {...props}
    >
      <path d="M3.275 17.3V6.7L10.85 12ZM12.425 17.075V6.925H15.575V17.075ZM17.575 17.075V6.925H20.725V17.075Z"/>
    </Icon>
  )
});

export default IconMaterialPlayPauseOutlinedW700;
