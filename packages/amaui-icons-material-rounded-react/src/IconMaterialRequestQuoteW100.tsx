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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425ZM6 7.35V4v16V7.35Zm4.45 9.675q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.65v-2.3h-3.65q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1h1.65v-.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H10.8v2.3h3.65q.15 0 .25.1t.1.25v3q0 .15-.1.25t-.25.1H12.8v.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.65ZM18 7.35h-3.1q-.325 0-.537-.213-.213-.212-.213-.537V4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteW100.displayName = 'AmauiIconMaterialRequestQuoteW100';

export default IconMaterialRequestQuoteW100;
