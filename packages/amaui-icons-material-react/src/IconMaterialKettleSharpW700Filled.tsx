import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKettleSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleSharpW700Filled'
      short_name='Kettle'

      {...props}
    >
      <path d="M4.475 19.375V5.8L.9.475h17.675v3h1.8q1.3 0 2.225.925t.925 2.225v4.8q0 1.3-.925 2.225t-2.225.925h-1.8v4.8Zm14.1-7.95h1.8v-4.8h-1.8Zm-7.15 3.8h3v-10.6h-3Zm-9.95 8.3v-3.15h21.05v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialKettleSharpW700Filled;
