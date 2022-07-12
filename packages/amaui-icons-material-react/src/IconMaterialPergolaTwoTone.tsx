import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPergolaTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PergolaTwoTone'
      short_name='Pergola'

      {...props}
    >
      <path d="M2.125 21.875V1.85q0-.575.4-1.05.4-.475 1.1-.475.7 0 1.113.475.412.475.412 1.05v.85h13.725v-.85q0-.575.462-1.05.463-.475 1.038-.475.6 0 1.063.475.462.475.462 1.05v20.025h-3.025v-11H5.15v11Zm8.375 0v-2.6h-3V16.25h9.025v3.025h-3v2.6Z"/>
    </Icon>
  )
});

export default IconMaterialPergolaTwoTone;
