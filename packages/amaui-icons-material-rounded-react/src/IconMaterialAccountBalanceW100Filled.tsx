import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceW100Filled'

      short_name='AccountBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 17q-.15 0-.25-.1t-.1-.25V9.025q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v7.625q0 .125-.1.225t-.25.1Zm4.7 0q-.15 0-.25-.1t-.1-.25V9.025q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v7.625q0 .125-.1.225T12 17Zm-7.675 2.7q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h15.325q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1ZM16.7 17q-.15 0-.25-.1t-.1-.25V9.025q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v7.625q0 .125-.1.225t-.25.1ZM12.625 2.75 19.8 6.1q.1.05.15.125.05.075.05.2t-.062.2q-.063.075-.188.075H4.225q-.1 0-.163-.075Q4 6.55 4 6.425t.062-.2q.063-.075.163-.125l7.15-3.35q.3-.125.625-.125t.625.125Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceW100Filled.displayName = 'AmauiIconMaterialAccountBalanceW100Filled';

export default IconMaterialAccountBalanceW100Filled;
