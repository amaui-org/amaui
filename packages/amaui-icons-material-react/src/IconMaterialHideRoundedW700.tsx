import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideRoundedW700'
      short_name='Hide'

      {...props}
    >
      <path d="M12.425 11.575V3.9H15.575V6.2L19.575 2.2L21.8 4.425L17.8 8.425H20.1V11.575ZM4.425 21.8 2.2 19.575 6.2 15.575H3.9V12.425H11.575V20.1H8.425V17.8Z"/>
    </Icon>
  )
});

export default IconMaterialHideRoundedW700;
