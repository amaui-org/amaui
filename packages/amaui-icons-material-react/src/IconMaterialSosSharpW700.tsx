import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSosSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosSharpW700'
      short_name='Sos'

      {...props}
    >
      <path d="M8.125 17.575V6.425H15.875V17.575ZM0.225 17.575V14.425H3.85V13.575H0.225V6.425H7V9.575H3.375V10.425H7V17.575ZM17 17.575V14.425H20.625V13.575H17V6.425H23.775V9.575H20.15V10.425H23.775V17.575ZM11.275 14.425H12.725V9.575H11.275Z"/>
    </Icon>
  )
});

export default IconMaterialSosSharpW700;
