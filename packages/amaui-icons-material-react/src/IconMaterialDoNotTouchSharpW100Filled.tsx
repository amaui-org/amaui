import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotTouchSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchSharpW100Filled'
      short_name='DoNotTouch'

      {...props}
    >
      <path d="M21.3 22.3 16.3 17.3V19.3H10.2L4.5 13.25L5.275 12.5L8.3 14.225V9.3L2.25 3.25L2.75 2.75L21.8 21.8ZM16.3 13.475 12.9 10.075V4.2H14V11.175L14.225 11.4H15.2V5.8H16.3ZM11.7 8.875 10.6 7.775V3.4H11.7ZM9.4 6.575 8.3 5.475V5H9.4Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchSharpW100Filled.displayName = 'AmauiIconMaterialDoNotTouchSharpW100Filled';

export default IconMaterialDoNotTouchSharpW100Filled;
