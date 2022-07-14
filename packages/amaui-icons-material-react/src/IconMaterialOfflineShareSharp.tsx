import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineShareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareSharp'
      short_name='OfflineShare'

      {...props}
    >
      <path d="M8 19V1H20V19ZM10 14H18V6H10ZM10 4H18V3H10ZM10 17H18V16H10ZM4 23V5H6V21H16V23ZM11 12V8.75H14.15L13.45 8.05L14.5 7L17 9.5L14.5 12L13.45 10.95L14.15 10.25H12.5V12ZM10 4V3V4ZM10 17V16V17Z"/>
    </Icon>
  );
});

export default IconMaterialOfflineShareSharp;
