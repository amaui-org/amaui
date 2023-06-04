import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuote'

      short_name='FormatQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 11h3V8h-3Zm-9 0h3V8H6Zm9 6 2-4h-4V6h7v7l-2 4Zm-9 0 2-4H4V6h7v7l-2 4Zm1.5-7.5Zm9 0Z"/>
    </Icon>
  );
});

IconMaterialFormatQuote.displayName = 'AmauiIconMaterialFormatQuote';

export default IconMaterialFormatQuote;
