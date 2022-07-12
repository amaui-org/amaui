import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaSharpW700'
      short_name='Villa'

      {...props}
    >
      <path d="M2.625 21.375V7.55L16.375 2.275V11.625H16.625Q16.625 10.65 17.325 9.938Q18.025 9.225 19 9.225Q19.975 9.225 20.675 9.938Q21.375 10.65 21.375 11.625V21.375ZM5.375 18.625H6.625H8.625V11.625H13.625V9.625V6.275L5.375 9.475ZM11.375 18.625H13.625V15.625H16.375V18.625H18.625V14.375H11.375ZM6.625 9.625ZM15 18.625ZM15 18.5Z"/>
    </Icon>
  )
});

export default IconMaterialVillaSharpW700;
