import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitSharpW700'
      short_name='Explicit'

      {...props}
    >
      <path d="M8.8 17.2H15.2V14.8H11.2V13.2H15.2V10.8H11.2V9.2H15.2V6.8H8.8ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialExplicitSharpW700;
