import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteFilled'

      short_name='FormatQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 17 2-4h-4V6h7v7l-2 4Zm-9 0 2-4H4V6h7v7l-2 4Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteFilled.displayName = 'AmauiIconMaterialFormatQuoteFilled';

export default IconMaterialFormatQuoteFilled;
