import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteW100Filled'

      short_name='FormatQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.375 16.35q-.2 0-.3-.162-.1-.163-.025-.338l1.55-3.5h-4.25q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v4.675q0 .15-.038.3-.037.15-.087.3L17.7 16.15q-.05.1-.125.15-.075.05-.2.05Zm-9 0q-.2 0-.3-.162-.1-.163-.025-.338l1.55-3.5H5.35q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v4.675q0 .15-.038.3-.037.15-.087.3L8.7 16.15q-.05.1-.125.15-.075.05-.2.05Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100Filled.displayName = 'AmauiIconMaterialFormatQuoteW100Filled';

export default IconMaterialFormatQuoteW100Filled;
