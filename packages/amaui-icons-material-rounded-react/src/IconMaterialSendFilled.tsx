import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendFilled'

      short_name='Send'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 19.425q-.5.2-.95-.088Q3 19.05 3 18.5v-3.725q0-.35.2-.625t.55-.35L11 12l-7.25-1.8q-.35-.075-.55-.35-.2-.275-.2-.625V5.5q0-.55.45-.838.45-.287.95-.087l15.4 6.5q.625.275.625.925t-.625.925Z"/>
    </Icon>
  );
});

IconMaterialSendFilled.displayName = 'AmauiIconMaterialSendFilled';

export default IconMaterialSendFilled;
