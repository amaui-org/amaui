import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRsvpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpSharpFilled'
      short_name='Rsvp'

      {...props}
    >
      <path d="M14.25 15 12.5 9H14L15 12.425L16 9H17.5L15.75 15ZM1 15V9H6V13H5.15L6 15H4.5L3.65 13H2.5V15ZM2.5 11.5H4.5V10.5H2.5ZM18 15V9H23V13H19.5V15ZM19.5 11.5H21.5V10.5H19.5ZM7 15V13.5H10V12.75H7V9H11.5V10.5H8.5V11.25H11.5V15Z"/>
    </Icon>
  );
});

IconMaterialRsvpSharpFilled.displayName = 'AmauiIconMaterialRsvpSharpFilled';

export default IconMaterialRsvpSharpFilled;
