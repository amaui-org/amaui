import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindFilled'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.6 20-2.575-2.55q-.45.275-.95.413Q17.575 18 17 18q-1.7 0-2.85-1.15Q13 15.7 13 14q0-1.7 1.15-2.85Q15.3 10 17 10q1.7 0 2.85 1.15Q21 12.3 21 14q0 .575-.137 1.075-.138.5-.413.95L23 18.6ZM17 16q.85 0 1.425-.575Q19 14.85 19 14q0-.85-.575-1.425Q17.85 12 17 12q-.85 0-1.425.575Q15 13.15 15 14q0 .85.575 1.425Q16.15 16 17 16Zm-5 5L0 8.975q2.325-2.325 5.388-3.65Q8.45 4 12 4q3.55 0 6.613 1.325Q21.675 6.65 24 8.975l-1.875 1.9Q21.375 9.6 20.062 8.8 18.75 8 17 8q-2.5 0-4.25 1.75T11 14q0 1.725.812 3.062.813 1.338 2.038 2.063Z"/>
    </Icon>
  );
});

IconMaterialWifiFindFilled.displayName = 'AmauiIconMaterialWifiFindFilled';

export default IconMaterialWifiFindFilled;
