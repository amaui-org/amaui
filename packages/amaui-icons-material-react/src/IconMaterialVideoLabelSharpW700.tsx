import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLabelSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelSharpW700'
      short_name='VideoLabel'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 15.3H19.7V6.3H4.3Z"/>
    </Icon>
  )
});

export default IconMaterialVideoLabelSharpW700;
