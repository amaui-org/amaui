import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsSharpW700Filled'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.925 13.775 10.225 7.075 16.925 0.4 23.6 7.075ZM0.775 11.775V2.3H10.225V11.775ZM12.225 23.225V13.775H21.7V23.225ZM0.775 23.225V13.775H10.225V23.225Z"/>
    </Icon>
  )
});

export default IconMaterialWidgetsSharpW700Filled;
