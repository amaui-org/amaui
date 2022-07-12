import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharpW700'
      short_name='Straighten'

      {...props}
    >
      <path d="M1.225 18.625V5.375H22.775V18.625ZM4.375 15.475H19.625V8.525H17V12H15V8.525H13V12H11V8.525H9V12H7V8.525H4.375ZM7 12H9ZM11 12H13ZM15 12H17ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenSharpW700;
