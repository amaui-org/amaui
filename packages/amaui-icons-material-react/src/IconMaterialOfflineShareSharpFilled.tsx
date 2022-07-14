import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineShareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareSharpFilled'
      short_name='OfflineShare'

      {...props}
    >
      <path d="M8 19V1H20V19ZM10 14H18V6H10ZM4 23V5H6V21H16V23ZM11 12V8.75H14.15L13.45 8.05L14.5 7L17 9.5L14.5 12L13.45 10.95L14.15 10.25H12.5V12Z"/>
    </Icon>
  );
});

export default IconMaterialOfflineShareSharpFilled;
