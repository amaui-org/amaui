import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Send'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18.5v-13q0-.55.45-.838.45-.287.95-.087l15.4 6.5q.625.275.625.925t-.625.925l-15.4 6.5q-.5.2-.95-.088Q3 19.05 3 18.5ZM5 17l11.85-5L5 7v3.5l6 1.5-6 1.5Zm0-5V7v10Z"/>
    </Icon>
  );
});

IconMaterialSend.displayName = 'AmauiIconMaterialSend';

export default IconMaterialSend;
