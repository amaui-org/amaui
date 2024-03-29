import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeed'

      short_name='ShutterSpeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3V1h6v2Zm3 19q-1.875 0-3.512-.712-1.638-.713-2.863-1.938T3.7 16.488Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.575 0 3 .525T17.6 6l1.45-1.45 1.4 1.4-1.4 1.45q.9 1.175 1.425 2.6T21 13q0 1.85-.7 3.488-.7 1.637-1.925 2.862t-2.862 1.938Q13.875 22 12 22Zm0-9Zm0-2h6.7q-.45-1.55-1.537-2.725Q16.075 7.1 14.6 6.5Zm-1.75 1 3.35-5.8q-1.475-.375-3.038-.063Q9 6.45 7.65 7.5ZM5.1 14h5.15L6.9 8.2q-1.05 1.175-1.562 2.663Q4.825 12.35 5.1 14Zm4.3 5.5L12 15H5.3q.45 1.55 1.538 2.725Q7.925 18.9 9.4 19.5Zm1 .3q1.65.425 3.2.037 1.55-.387 2.75-1.337l-2.6-4.5Zm6.7-2q1.1-1.2 1.588-2.687.487-1.488.212-3.113h-5.15Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeed.displayName = 'AmauiIconMaterialShutterSpeed';

export default IconMaterialShutterSpeed;
