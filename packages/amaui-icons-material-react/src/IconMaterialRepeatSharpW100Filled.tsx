import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatSharpW100Filled'
      short_name='Repeat'

      {...props}
    >
      <path d="M7.25 20.85 4.15 17.75 7.25 14.65 7.75 15.15 5.5 17.4H17.4V13.4H18.1V18.1H5.5L7.75 20.35ZM5.9 10.6V5.9H18.5L16.25 3.65L16.75 3.15L19.85 6.25L16.75 9.35L16.25 8.85L18.5 6.6H6.6V10.6Z"/>
    </Icon>
  );
});

IconMaterialRepeatSharpW100Filled.displayName = 'AmauiIconMaterialRepeatSharpW100Filled';

export default IconMaterialRepeatSharpW100Filled;
