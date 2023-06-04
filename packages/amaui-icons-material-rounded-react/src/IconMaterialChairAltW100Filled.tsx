import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltW100Filled'

      short_name='ChairAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 16.45v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.3q0-.65.425-1.075Q7.65 12.3 8.3 12.3h.85v-2.1H8.3q-.65 0-1.075-.425Q6.8 9.35 6.8 8.7V6.55q0-.65.425-1.075Q7.65 5.05 8.3 5.05h7.4q.65 0 1.075.425.425.425.425 1.075V8.7q0 .65-.425 1.075-.425.425-1.075.425h-.85v2.1h.85q.65 0 1.075.425.425.425.425 1.075v5.3q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-2.65Zm2.35-4.15h4.3v-2.1h-4.3Z"/>
    </Icon>
  );
});

IconMaterialChairAltW100Filled.displayName = 'AmauiIconMaterialChairAltW100Filled';

export default IconMaterialChairAltW100Filled;
