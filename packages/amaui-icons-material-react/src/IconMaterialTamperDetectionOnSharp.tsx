import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnSharp'
      short_name='TamperDetectionOn'

      {...props}
    >
      <path d="M14 17v-2h2V3H4v3H2V1h16v6.5l4-4v11l-4-4V17ZM3.625 20.025-.25 16.15l1.4-1.4L3 16.6V8.5h1.5V13h1V7H7v6h1V8h1.5v5h1V9H12v11ZM16 3v12V3Z"/>
    </Icon>
  );
});

export default IconMaterialTamperDetectionOnSharp;
