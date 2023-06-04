import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRsvp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rsvp'

      short_name='Rsvp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 15 12.5 9H14l1 3.425L16 9h1.5l-1.75 6ZM1 15V9h5v4h-.85L6 15H4.5l-.85-2H2.5v2Zm1.5-3.5h2v-1h-2ZM18 15V9h5v4h-3.5v2Zm1.5-3.5h2v-1h-2ZM7 15v-1.5h3v-.75H7V9h4.5v1.5h-3v.75h3V15Z"/>
    </Icon>
  );
});

IconMaterialRsvp.displayName = 'AmauiIconMaterialRsvp';

export default IconMaterialRsvp;
