import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenFilled'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V8q0-.825.588-1.412Q3.175 6 4 6h3v5q0 .425.287.712Q7.575 12 8 12t.713-.288Q9 11.425 9 11V6h2v5q0 .425.288.712.287.288.712.288t.713-.288Q13 11.425 13 11V6h2v5q0 .425.288.712.287.288.712.288t.712-.288Q17 11.425 17 11V6h3q.825 0 1.413.588Q22 7.175 22 8v8q0 .825-.587 1.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialStraightenFilled.displayName = 'AmauiIconMaterialStraightenFilled';

export default IconMaterialStraightenFilled;
