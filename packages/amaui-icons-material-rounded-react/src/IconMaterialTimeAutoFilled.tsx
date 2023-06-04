import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimeAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoFilled'

      short_name='TimeAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2Zm2.9-3.2 1.1-3.3 1.075 3.3ZM9 3V1h6v2Zm3 19q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4Q20 8.6 20.5 10.025 21 11.45 21 13q0 1.85-.712 3.488-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoFilled.displayName = 'AmauiIconMaterialTimeAutoFilled';

export default IconMaterialTimeAutoFilled;
