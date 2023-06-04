import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 16.45v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.3q0-.65.425-1.075Q7.65 12.3 8.3 12.3h.85v-2.1H8.3q-.65 0-1.075-.425Q6.8 9.35 6.8 8.7V6.55q0-.65.425-1.075Q7.65 5.05 8.3 5.05h7.4q.65 0 1.075.425.425.425.425 1.075V8.7q0 .65-.425 1.075-.425.425-1.075.425h-.85v2.1h.85q.65 0 1.075.425.425.425.425 1.075v5.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.65Zm.8-6.95h7.4q.3 0 .55-.25.25-.25.25-.55V6.55q0-.3-.25-.55-.25-.25-.55-.25H8.3q-.3 0-.55.25-.25.25-.25.55V8.7q0 .3.25.55.25.25.55.25Zm1.55 2.8h4.3v-2.1h-4.3ZM7.5 15.75h9V13.8q0-.3-.25-.55Q16 13 15.7 13H8.3q-.3 0-.55.25-.25.25-.25.55Zm0-6.25V5.75 9.5Zm0 6.25V13v2.75Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100.displayName = 'AmauiIconMaterialChairAltW100';

export default IconMaterialChairAltW100;
