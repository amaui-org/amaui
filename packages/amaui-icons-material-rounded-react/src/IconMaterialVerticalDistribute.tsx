import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistribute'

      short_name='VerticalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 4q-.425 0-.712-.288Q2 3.425 2 3t.288-.713Q2.575 2 3 2h18q.425 0 .712.287Q22 2.575 22 3t-.288.712Q21.425 4 21 4Zm5.5 9.5q-.625 0-1.062-.438Q7 12.625 7 12t.438-1.062Q7.875 10.5 8.5 10.5h7q.625 0 1.062.438Q17 11.375 17 12t-.438 1.062q-.437.438-1.062.438ZM3 22q-.425 0-.712-.288Q2 21.425 2 21t.288-.712Q2.575 20 3 20h18q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistribute.displayName = 'AmauiIconMaterialVerticalDistribute';

export default IconMaterialVerticalDistribute;
