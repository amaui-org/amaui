import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYenW100'

      short_name='CurrencyYen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-.15 0-.25-.1t-.1-.25V16.1H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.65v-3.05H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.25l-4.325-6.8q-.125-.175-.012-.363.112-.187.312-.187.1 0 .175.05.075.05.125.125L12 11.525l4.475-7.05q.05-.075.125-.125t.175-.05q.2 0 .312.175.113.175-.012.375l-4.325 6.8H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.65v3.05H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.65v3.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYenW100.displayName = 'AmauiIconMaterialCurrencyYenW100';

export default IconMaterialCurrencyYenW100;
