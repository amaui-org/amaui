import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteW100Filled'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm6.8-2.675h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM14.35 7.35h3.35L14.35 4Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteW100Filled.displayName = 'AmauiIconMaterialRequestQuoteW100Filled';

export default IconMaterialRequestQuoteW100Filled;
