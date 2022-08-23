import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutgoingMailSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailSharpW100Filled'
      short_name='OutgoingMail'

      {...props}
    >
      <path d="M19 20.075 18.525 19.6 20.725 17.35H15.65V16.65H20.725L18.525 14.4L19 13.925L22.075 17ZM4.15 18.35Q3.525 18.35 3.088 17.913Q2.65 17.475 2.65 16.85V7.15Q2.65 6.525 3.088 6.087Q3.525 5.65 4.15 5.65H16.85Q17.475 5.65 17.913 6.087Q18.35 6.525 18.35 7.15V11.575H17.65V6.9L10.4 12.2L3.35 6.9V16.85Q3.35 17.2 3.575 17.425Q3.8 17.65 4.15 17.65H13.575V18.35ZM3.75 6.35 10.4 11.35 17.25 6.35Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailSharpW100Filled.displayName = 'AmauiIconMaterialOutgoingMailSharpW100Filled';

export default IconMaterialOutgoingMailSharpW100Filled;
