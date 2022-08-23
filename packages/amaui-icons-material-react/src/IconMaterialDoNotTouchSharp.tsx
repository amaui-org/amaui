import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoNotTouchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchSharp'
      short_name='DoNotTouch'

      {...props}
    >
      <path d="M19.775 22.6 18.65 21.475 19.175 22H9.7L2 13.875L3.7 12.25L7 14.125V9.825L1.4 4.225L2.8 2.8L21.2 21.2ZM13.075 15.9ZM20 17.175 18 15.175V13H15.825L13.825 11H14V2H16.5V11H17.5V4H20ZM13 10.175 10.5 7.675V1H13ZM9.5 6.675 7 4.175V3H9.5ZM15.825 13ZM10.575 20H17.175L9 11.825V16H6.875Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchSharp.displayName = 'AmauiIconMaterialDoNotTouchSharp';

export default IconMaterialDoNotTouchSharp;
