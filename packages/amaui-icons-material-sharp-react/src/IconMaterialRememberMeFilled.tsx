import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRememberMeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeFilled'

      short_name='RememberMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h14v22Zm2-7.8q1.125-.575 2.387-.888Q10.65 14 12 14t2.613.312q1.262.313 2.387.888V6H7Zm5-2.2q1.25 0 2.125-.875T15 10q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10q0 1.25.875 2.125T12 13Z"/>
    </Icon>
  );
});

IconMaterialRememberMeFilled.displayName = 'AmauiIconMaterialRememberMeFilled';

export default IconMaterialRememberMeFilled;
