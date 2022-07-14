import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackSharpFilled'
      short_name='Backpack'

      {...props}
    >
      <path d="M4 22V8Q4 6.6 4.85 5.55Q5.7 4.5 7 4.15V2H10V4H14V2H17V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8V22ZM14.5 16H16.5V12H7.5V14H14.5Z"/>
    </Icon>
  );
});

export default IconMaterialBackpackSharpFilled;
