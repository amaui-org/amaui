import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffFilled'

      short_name='CloudOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.1 21.9 17.15 20H6.5q-2.3 0-3.9-1.6T1 14.5q0-1.925 1.188-3.425 1.187-1.5 3.062-1.925.075-.2.15-.388.075-.187.15-.412L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.288-.425.012-.7-.288Zm2.5-3.15L8.05 5.225q.875-.6 1.863-.913Q10.9 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 .975-.375 1.812-.375.838-1.025 1.438Z"/>
    </Icon>
  );
});

IconMaterialCloudOffFilled.displayName = 'AmauiIconMaterialCloudOffFilled';

export default IconMaterialCloudOffFilled;
