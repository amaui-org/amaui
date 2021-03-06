import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInFullSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullSharpW100'
      short_name='OpenInFull'

      {...props}
    >
      <path d="M3.65 20.35V13.65H4.35V19.175L19.175 4.35H13.65V3.65H20.35V10.35H19.65V4.825L4.825 19.65H10.35V20.35Z"/>
    </Icon>
  );
});

export default IconMaterialOpenInFullSharpW100;
