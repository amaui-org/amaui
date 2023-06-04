import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100'

      short_name='BackHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22.1q-2.35 0-4.125-1.263-1.775-1.262-2.65-3.962L4.35 11.05l2.8-.975 1.55 3.9V4.1h2.5V1.8h2.7v.9h2.6v2.75h2.6V16q0 3.075-1.513 4.587Q16.075 22.1 13 22.1Zm0-.7q2.75 0 4.075-1.325Q18.4 18.75 18.4 16V6.15h-1.2V12h-1.4V3.4h-1.2V12h-1.4V2.5H12V12h-1.4V4.8H9.4v10.55h-.9l-1.75-4.4-1.525.55L6.9 16.65q.8 2.5 2.363 3.625Q10.825 21.4 13 21.4Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100.displayName = 'AmauiIconMaterialBackHandW100';

export default IconMaterialBackHandW100;
