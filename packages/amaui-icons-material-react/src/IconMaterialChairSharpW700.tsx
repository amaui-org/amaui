import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharpW700'
      short_name='Chair'

      {...props}
    >
      <path d="M4 22.725V19.775H0.225V7.35H3.225V2.225H20.775V7.35H23.775V19.775H20V22.725H16.85V19.775H7.15V22.725ZM3.375 16.625H20.625V10.375H19.375V15.375H4.625V10.375H3.375ZM7.775 12.225H16.225V7.35H17.625V5.375H6.375V7.35H7.775ZM12 15.375ZM12 12.225ZM12 15.375Z"/>
    </Icon>
  )
});

export default IconMaterialChairSharpW700;
