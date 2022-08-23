import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotTouchSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchSharpFilled'
      short_name='DoNotTouch'

      {...props}
    >
      <path d="M19.775 22.6 18.65 21.475 19.175 22H9.7L2 13.875L3.7 12.25L7 14.125V9.825L1.4 4.225L2.8 2.8L21.2 21.2ZM20 17.175 13.825 11H14V2H16.5V11H17.5V4H20ZM13 10.175 10.5 7.675V1H13ZM9.5 6.675 7 4.175V3H9.5Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchSharpFilled.displayName = 'AmauiIconMaterialDoNotTouchSharpFilled';

export default IconMaterialDoNotTouchSharpFilled;
