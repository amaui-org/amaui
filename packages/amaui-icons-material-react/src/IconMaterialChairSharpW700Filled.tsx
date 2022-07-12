import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharpW700Filled'
      short_name='Chair'

      {...props}
    >
      <path d="M4 22.725V19.775H0.225V10H4.625V15H19.375V10H23.775V19.775H20V22.725H16.85V19.775H7.15V22.725ZM6.625 13.2V8H3.225V2.225H20.775V8H17.375V13.2Z"/>
    </Icon>
  )
});

export default IconMaterialChairSharpW700Filled;
