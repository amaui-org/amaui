import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftSharpW100'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M13.35 15.45 9.9 12 13.35 8.55Z"/>
    </Icon>
  )
});

export default IconMaterialArrowLeftSharpW100;
