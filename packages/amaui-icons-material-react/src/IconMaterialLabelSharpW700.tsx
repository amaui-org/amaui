import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelSharpW700'
      short_name='Label'

      {...props}
    >
      <path d="M2.05 19.85V4.15H16.375L21.95 12L16.375 19.85ZM5.2 16.7H14.75L18.075 12L14.75 7.3H5.2ZM5.2 7.3V12V16.7Z"/>
    </Icon>
  )
});

export default IconMaterialLabelSharpW700;
