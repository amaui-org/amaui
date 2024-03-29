import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbSunnyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunnyFilled'

      short_name='WbSunny'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 4V1h2v3Zm0 19v-3h2v3Zm9-10v-2h3v2ZM1 13v-2h3v2Zm17.7-6.3-1.4-1.4 1.75-1.8 1.45 1.45ZM4.95 20.5 3.5 19.05l1.8-1.75 1.4 1.4Zm14.1 0-1.75-1.8 1.4-1.4 1.8 1.75ZM5.3 6.7 3.5 4.95 4.95 3.5 6.7 5.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialWbSunnyFilled.displayName = 'AmauiIconMaterialWbSunnyFilled';

export default IconMaterialWbSunnyFilled;
