import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRsvpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RsvpW100'

      short_name='Rsvp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.5 14.6-1.525-5.2h.725l1.3 4.45 1.3-4.45h.725L15.5 14.6Zm-13.1 0V9.4h4.2v3.2H4.525l.875 2h-.775l-.85-2H2.1v2Zm.7-2.7h2.8v-1.8H2.1Zm16.3 2.7V9.4h4.2v3.2h-3.5v2Zm.7-2.7h2.8v-1.8h-2.8ZM7.4 14.6v-.7h3v-1.55h-3V9.4h3.7v.7h-3v1.55h3v2.95Z"/>
    </Icon>
  );
});

IconMaterialRsvpW100.displayName = 'AmauiIconMaterialRsvpW100';

export default IconMaterialRsvpW100;
