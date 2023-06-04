import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistribute'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21V3q0-.425.288-.713Q2.575 2 3 2t.713.287Q4 2.575 4 3v18q0 .425-.287.712Q3.425 22 3 22Zm9-5q-.625 0-1.062-.438-.438-.437-.438-1.062v-7q0-.625.438-1.062Q11.375 7 12 7t1.062.438q.438.437.438 1.062v7q0 .625-.438 1.062Q12.625 17 12 17Zm9 5q-.425 0-.712-.288Q20 21.425 20 21V3q0-.425.288-.713Q20.575 2 21 2t.712.287Q22 2.575 22 3v18q0 .425-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistribute.displayName = 'AmauiIconMaterialHorizontalDistribute';

export default IconMaterialHorizontalDistribute;
