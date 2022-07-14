import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLabelSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelSharpFilled'
      short_name='VideoLabel'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 15H20V6H4Z"/>
    </Icon>
  );
});

export default IconMaterialVideoLabelSharpFilled;
