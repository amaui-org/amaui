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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm5.65-2.675q.15 0 .25-.1t.1-.25v-.65h1.65q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1H10.8v-2.3h3.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H12.8v-.65q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v.65h-1.65q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1h3.65v2.3h-3.65q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65v.65q0 .15.1.25t.25.1ZM15.1 7.35h2.6L14.35 4v2.6q0 .325.212.537.213.213.538.213Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteW100Filled.displayName = 'AmauiIconMaterialRequestQuoteW100Filled';

export default IconMaterialRequestQuoteW100Filled;
