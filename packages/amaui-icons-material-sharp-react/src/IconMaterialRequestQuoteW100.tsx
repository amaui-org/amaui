import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestQuoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteW100'

      short_name='RequestQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7ZM6 7.35V4v16V7.35Zm6.1 10.675v-1h-2v-.7h4v-2.3h-4v-3.7h2v-1h.7v1h2v.7h-4v2.3h4v3.7h-2v1ZM14.15 7.35V4H6v16h12V7.35Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteW100.displayName = 'AmauiIconMaterialRequestQuoteW100';

export default IconMaterialRequestQuoteW100;
