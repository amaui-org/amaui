import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClosedCaptionSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionSharpW100Filled'
      short_name='ClosedCaption'

      {...props}
    >
      <path d="M6.9 14.6H11.1V13.3H10.4V13.9H7.6V10.1H10.4V10.75H11.1V9.4H6.9ZM12.9 14.6H17.1V13.3H16.4V13.9H13.6V10.1H16.4V10.75H17.1V9.4H12.9ZM4.3 18.7V5.3H19.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionSharpW100Filled.displayName = 'AmauiIconMaterialClosedCaptionSharpW100Filled';

export default IconMaterialClosedCaptionSharpW100Filled;
