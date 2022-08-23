import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRsvpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpSharpW100'
      short_name='Rsvp'

      {...props}
    >
      <path d="M14.5 14.6 12.975 9.4H13.7L15 13.85L16.3 9.4H17.025L15.5 14.6ZM1.4 14.6V9.4H5.6V12.6H4.525L5.4 14.6H4.625L3.775 12.6H2.1V14.6ZM2.1 11.9H4.9V10.1H2.1ZM18.4 14.6V9.4H22.6V12.6H19.1V14.6ZM19.1 11.9H21.9V10.1H19.1ZM7.4 14.6V13.9H10.4V12.35H7.4V9.4H11.1V10.1H8.1V11.65H11.1V14.6Z"/>
    </Icon>
  );
});

IconMaterialRsvpSharpW100.displayName = 'AmauiIconMaterialRsvpSharpW100';

export default IconMaterialRsvpSharpW100;
