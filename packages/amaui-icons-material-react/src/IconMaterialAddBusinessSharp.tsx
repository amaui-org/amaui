import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBusinessSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessSharp'
      short_name='AddBusiness'

      {...props}
    >
      <path d="M18 23V20H15V18H18V15H20V18H23V20H20V23ZM2 20V14H1V12L2 7H17L18 12V14H17V17H15V14H11V20ZM4 18H9V14H4ZM3.05 12H15.95ZM2 6V4H17V6ZM3.05 12H15.95L15.35 9H3.65Z"/>
    </Icon>
  );
});

export default IconMaterialAddBusinessSharp;
