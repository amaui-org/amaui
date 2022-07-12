import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharpW700Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M1.225 18.625V5.375H7V12H9V5.375H11V12H13V5.375H15V12H17V5.375H22.775V18.625Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenSharpW700Filled;
