import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClosedCaptionDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabledSharpFilled'
      short_name='ClosedCaptionDisabled'

      {...props}
    >
      <path d="M20.475 23.3 17.175 20H3V5.825L0.675 3.5L2.1 2.075L21.9 21.875ZM21 18.125 17.65 14.775H18V13H16.5V13.5H16.375L14.5 11.625V10.5H16.5V11H18V9H13V10.125L6.875 4H21ZM6 15H11V13.825L10.175 13H9.5V13.5H7.5V10.325L6.375 9.2H6Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabledSharpFilled.displayName = 'AmauiIconMaterialClosedCaptionDisabledSharpFilled';

export default IconMaterialClosedCaptionDisabledSharpFilled;
