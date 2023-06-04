import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopFilled'

      short_name='AlignVerticalTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 4q-.425 0-.712-.288Q2 3.425 2 3t.288-.713Q2.575 2 3 2h18q.425 0 .712.287Q22 2.575 22 3t-.288.712Q21.425 4 21 4Zm5.5 18q-.625 0-1.062-.438Q7 21.125 7 20.5v-13q0-.625.438-1.062Q7.875 6 8.5 6t1.062.438Q10 6.875 10 7.5v13q0 .625-.438 1.062Q9.125 22 8.5 22Zm7-6q-.625 0-1.062-.438Q14 15.125 14 14.5v-7q0-.625.438-1.062Q14.875 6 15.5 6t1.062.438Q17 6.875 17 7.5v7q0 .625-.438 1.062Q16.125 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopFilled.displayName = 'AmauiIconMaterialAlignVerticalTopFilled';

export default IconMaterialAlignVerticalTopFilled;
