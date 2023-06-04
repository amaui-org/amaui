import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbTwilightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightW100'

      short_name='WbTwilight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.85 9.7-.5-.5 1.6-1.6.5.5Zm-15.2 9.65v-.7h18.7v.7Zm9-12.05V5.1h.7v2.2Zm-5.5 2.4-1.6-1.6.5-.5 1.6 1.6Zm.3 5q.45-1.95 2-3.175Q10 10.3 12 10.3q2 0 3.55 1.225 1.55 1.225 2 3.175Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightW100.displayName = 'AmauiIconMaterialWbTwilightW100';

export default IconMaterialWbTwilightW100;
