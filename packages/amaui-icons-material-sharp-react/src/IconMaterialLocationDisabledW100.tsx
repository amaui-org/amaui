import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledW100'

      short_name='LocationDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.55 16.1-.5-.5q.425-.75.688-1.713.262-.962.262-1.837 0-2.9-2.05-4.95Q14.9 5.05 12 5.05q-.9 0-1.825.262Q9.25 5.575 8.5 6L8 5.5q.875-.525 1.738-.775.862-.25 1.912-.375v-1.3h.7v1.3q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1H21v.7h-1.3q-.125 1.05-.375 1.937-.25.888-.775 1.763Zm-6.9 4.95v-1.3q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1H3v-.7h1.3q.125-1.35.575-2.538.45-1.187 1.175-2.062L3.4 4.45l.5-.5 16.2 16.2-.55.5-2.6-2.65q-.875.725-2.063 1.175-1.187.45-2.537.575v1.3Zm.35-2q1.2 0 2.45-.475 1.25-.475 2-1.075l-9.9-9.9q-.6.75-1.075 1.962Q5 10.775 5 12.05q0 2.9 2.05 4.95Q9.1 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledW100.displayName = 'AmauiIconMaterialLocationDisabledW100';

export default IconMaterialLocationDisabledW100;
