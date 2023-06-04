import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestartAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestartAltW100'

      short_name='RestartAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.6q-2.475-.35-4.087-2.225Q5.3 15.5 5.3 13q0-1.325.525-2.538Q6.35 9.25 7.25 8.3l.5.5q-.875.825-1.312 1.912Q6 11.8 6 13q0 2.2 1.413 3.862Q8.825 18.525 11 18.9Zm2 .05v-.7q2.15-.5 3.575-2.138Q18 15.175 18 13q0-2.5-1.75-4.25T12 7h-.8l1.75 1.75-.5.5-2.6-2.6 2.6-2.6.5.5L11.2 6.3h.8q2.8 0 4.75 1.95Q18.7 10.2 18.7 13q0 2.5-1.625 4.35Q15.45 19.2 13 19.65Z"/>
    </Icon>
  );
});

IconMaterialRestartAltW100.displayName = 'AmauiIconMaterialRestartAltW100';

export default IconMaterialRestartAltW100;
