import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkSharpW700'
      short_name='Work'

      {...props}
    >
      <path d="M1.15 21.925V5.225H7.225V0.475H16.775V5.225H22.85V21.925ZM10.375 5.225H13.625V3.625H10.375ZM4.3 18.775H19.7V8.375H4.3ZM4.3 18.775V8.375Z"/>
    </Icon>
  )
});

export default IconMaterialWorkSharpW700;
