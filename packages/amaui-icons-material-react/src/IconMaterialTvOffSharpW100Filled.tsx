import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffSharpW100Filled'
      short_name='TvOff'

      {...props}
    >
      <path d="M20.55 17.7 7.15 4.3H20.7V17.7ZM20.2 21.2 16.65 17.7H14.7V19.7H9.3V17.7H3.3V4.3L2.1 3.1L2.6 2.6L20.7 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialTvOffSharpW100Filled;
