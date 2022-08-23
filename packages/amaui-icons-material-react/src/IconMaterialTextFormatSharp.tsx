import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFormatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatSharp'
      short_name='TextFormat'

      {...props}
    >
      <path d="M5 19V17H19V19ZM6.9 15 11 4H13L17.1 15H15.2L14.25 12.2H9.8L8.8 15ZM10.35 10.6H13.65L12.05 6.05H11.95Z"/>
    </Icon>
  );
});

IconMaterialTextFormatSharp.displayName = 'AmauiIconMaterialTextFormatSharp';

export default IconMaterialTextFormatSharp;
