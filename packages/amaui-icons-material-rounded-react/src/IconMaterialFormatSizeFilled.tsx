import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatSizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeFilled'

      short_name='FormatSize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 20q-.625 0-1.062-.438Q14 19.125 14 18.5V7h-3.5q-.625 0-1.062-.438Q9 6.125 9 5.5t.438-1.062Q9.875 4 10.5 4h10q.625 0 1.062.438Q22 4.875 22 5.5t-.438 1.062Q21.125 7 20.5 7H17v11.5q0 .625-.438 1.062Q16.125 20 15.5 20Zm-9 0q-.625 0-1.062-.438Q5 19.125 5 18.5V12H3.5q-.625 0-1.062-.438Q2 11.125 2 10.5t.438-1.062Q2.875 9 3.5 9h6q.625 0 1.062.438Q11 9.875 11 10.5t-.438 1.062Q10.125 12 9.5 12H8v6.5q0 .625-.438 1.062Q7.125 20 6.5 20Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeFilled.displayName = 'AmauiIconMaterialFormatSizeFilled';

export default IconMaterialFormatSizeFilled;
