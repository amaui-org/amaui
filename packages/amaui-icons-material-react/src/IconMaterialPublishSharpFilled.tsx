import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishSharpFilled'
      short_name='Publish'

      {...props}
    >
      <path d="M11 20V11.85L8.4 14.45L7 13L12 8L17 13L15.6 14.45L13 11.85V20ZM4 9V4H20V9H18V6H6V9Z"/>
    </Icon>
  );
});

export default IconMaterialPublishSharpFilled;
