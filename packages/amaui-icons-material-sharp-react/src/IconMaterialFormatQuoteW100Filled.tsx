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
      <path d="m16.825 16.35 1.775-4h-4.95v-5.7h5.7v5.7l-1.75 4Zm-9 0 1.775-4H4.65v-5.7h5.7v5.7l-1.75 4Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100Filled.displayName = 'AmauiIconMaterialFormatQuoteW100Filled';

export default IconMaterialFormatQuoteW100Filled;
