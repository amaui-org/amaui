import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRememberMe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMe'

      short_name='RememberMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h14v22Zm2-2h10v-1H7ZM7 4h10V3H7Zm5 12q-1.35 0-2.625.387Q8.1 16.775 7 17.5v.5h10v-.5q-1.1-.725-2.375-1.113Q13.35 16 12 16Zm0-2q1.35 0 2.613.312 1.262.313 2.387.888V6H7v9.2q1.125-.575 2.387-.888Q10.65 14 12 14Zm0-1q1.25 0 2.125-.875T15 10q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10q0 1.25.875 2.125T12 13Zm0-2q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm0 7h5H7h5Zm0-8Zm0-6Zm0 16Z"/>
    </Icon>
  );
});

IconMaterialRememberMe.displayName = 'AmauiIconMaterialRememberMe';

export default IconMaterialRememberMe;
