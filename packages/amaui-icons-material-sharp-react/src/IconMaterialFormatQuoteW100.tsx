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
      <path d="M14.35 11.65h4.3v-4.3h-4.3Zm-9 0h4.3v-4.3h-4.3Zm11.475 4.7 1.775-4h-4.95v-5.7h5.7v5.7l-1.75 4Zm-9 0 1.775-4H4.65v-5.7h5.7v5.7l-1.75 4ZM7.5 9.5Zm9 0Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteW100.displayName = 'AmauiIconMaterialFormatQuoteW100';

export default IconMaterialFormatQuoteW100;
