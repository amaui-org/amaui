import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterFilled'

      short_name='AlignVerticalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 21q-.625 0-1.062-.438Q7 20.125 7 19.5V13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h4V4.5q0-.625.438-1.062Q7.875 3 8.5 3t1.062.438Q10 3.875 10 4.5V11h4V7.5q0-.625.438-1.062Q14.875 6 15.5 6t1.062.438Q17 6.875 17 7.5V11h4q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-4v3.5q0 .625-.438 1.062Q16.125 18 15.5 18t-1.062-.438Q14 17.125 14 16.5V13h-4v6.5q0 .625-.438 1.062Q9.125 21 8.5 21Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterFilled.displayName = 'AmauiIconMaterialAlignVerticalCenterFilled';

export default IconMaterialAlignVerticalCenterFilled;
