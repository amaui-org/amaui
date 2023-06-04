import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeW100Filled'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 2.35v-.7h5v.7Zm.5 13.875L8.225 12.65H4.3q.125-3.1 2.35-5.225Q8.875 5.3 12 5.3q1.425 0 2.763.525Q16.1 6.35 17.2 7.3l1-1 .5.5-1 1q.875 1.025 1.413 2.262.537 1.238.587 2.588h-3.475L14 8.2Zm2 4.475q-3.125 0-5.35-2.138-2.225-2.137-2.35-5.212h3.475L10 17.775l4-8 1.8 3.575h3.9q-.125 3.075-2.35 5.212Q15.125 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeW100Filled.displayName = 'AmauiIconMaterialAvgTimeW100Filled';

export default IconMaterialAvgTimeW100Filled;
