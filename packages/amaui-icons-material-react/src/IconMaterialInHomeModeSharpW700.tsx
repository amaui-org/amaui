import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInHomeModeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeSharpW700'
      short_name='InHomeMode'

      {...props}
    >
      <path d="M3.625 20.575v-10.7h-3.4L12 .25l11.775 9.625h-3.4v1.7h-3.15V8.6L12 4.3 6.775 8.6v8.825H8.95v3.15Zm11.45 2.225L10.4 18.125l2.2-2.2 2.475 2.475 5.325-5.325 2.2 2.2Z"/>
    </Icon>
  )
});

export default IconMaterialInHomeModeSharpW700;
