import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolylineSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolylineSharpW700Filled'
      short_name='Polyline'

      {...props}
    >
      <path d="M14.625 22.775V19.725L8.3 16.575H1.85V9.05H7.675L9.625 6.775V0.85H17.15V8.375H11.875L9.375 11.3V14.025L14.625 16.625V15.225H22.15V22.775Z"/>
    </Icon>
  )
});

export default IconMaterialPolylineSharpW700Filled;
