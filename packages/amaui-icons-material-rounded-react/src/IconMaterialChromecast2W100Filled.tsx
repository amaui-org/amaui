import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromecast2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chromecast2W100Filled'

      short_name='Chromecast2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.7 19.2q-2.375 0-4.038-1.662Q4 15.875 4 13.5q0-1.95 1.375-3.713Q6.75 8.025 9.35 7.8v-.95q0-1.05.738-1.775.737-.725 1.787-.725.575 0 1.1.25.525.25.875.7l4.375 5.55.475-.375 1.675 2.075-1.5 1.175-1.65-2.075.45-.375-4.4-5.55q-.275-.35-.625-.512-.35-.163-.775-.163-.75 0-1.287.525-.538.525-.538 1.275v.95q2.6.225 3.975 1.987Q15.4 11.55 15.4 13.5q0 2.375-1.662 4.038Q12.075 19.2 9.7 19.2Zm0-.7q2.075 0 3.538-1.462Q14.7 15.575 14.7 13.5q0-2.075-1.462-3.538Q11.775 8.5 9.7 8.5q-2.075 0-3.538 1.462Q4.7 11.425 4.7 13.5q0 2.075 1.462 3.538Q7.625 18.5 9.7 18.5Z"/>
    </Icon>
  );
});

IconMaterialChromecast2W100Filled.displayName = 'AmauiIconMaterialChromecast2W100Filled';

export default IconMaterialChromecast2W100Filled;
