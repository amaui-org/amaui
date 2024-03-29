import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomFilled'

      short_name='AlignVerticalBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21t.288-.712Q2.575 20 3 20h18q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 22 21 22Zm5.5-4q-.625 0-1.062-.438Q7 17.125 7 16.5v-13q0-.625.438-1.062Q7.875 2 8.5 2t1.062.438Q10 2.875 10 3.5v13q0 .625-.438 1.062Q9.125 18 8.5 18Zm7 0q-.625 0-1.062-.438Q14 17.125 14 16.5v-7q0-.625.438-1.062Q14.875 8 15.5 8t1.062.438Q17 8.875 17 9.5v7q0 .625-.438 1.062Q16.125 18 15.5 18Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomFilled.displayName = 'AmauiIconMaterialAlignVerticalBottomFilled';

export default IconMaterialAlignVerticalBottomFilled;
