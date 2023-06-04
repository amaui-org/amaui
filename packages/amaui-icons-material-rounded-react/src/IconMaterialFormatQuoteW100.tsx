import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteW100'

      short_name='FormatQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 11.65h4.3v-4.3h-4.3Zm-9 0h4.3v-4.3h-4.3Zm12.025 4.7q-.2 0-.3-.162-.1-.163-.025-.338l1.55-3.5h-4.25q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v4.675q0 .15-.038.3-.037.15-.087.3L17.7 16.15q-.05.1-.125.15-.075.05-.2.05Zm-9 0q-.2 0-.3-.162-.1-.163-.025-.338l1.55-3.5H5.35q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v4.675q0 .15-.038.3-.037.15-.087.3L8.7 16.15q-.05.1-.125.15-.075.05-.2.05ZM7.5 9.5Zm9 0Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100.displayName = 'AmauiIconMaterialFormatQuoteW100';

export default IconMaterialFormatQuoteW100;
