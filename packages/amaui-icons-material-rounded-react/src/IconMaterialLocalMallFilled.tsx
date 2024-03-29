import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalMallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallFilled'

      short_name='LocalMall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 22H5q-.825 0-1.413-.587Q3 20.825 3 20V8q0-.825.587-1.412Q4.175 6 5 6h2q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6h2q.825 0 1.413.588Q21 7.175 21 8v12q0 .825-.587 1.413Q19.825 22 19 22ZM9 6h6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm3 8q1.85 0 3.35-1.225t1.475-2.75q0-.425-.275-.725t-.7-.3q-.35 0-.625.225t-.4.675q-.275.95-1.075 1.525Q12.95 12 12 12t-1.762-.575Q9.425 10.85 9.175 9.9q-.125-.475-.375-.688Q8.55 9 8.2 9q-.425 0-.712.3-.288.3-.288.725 0 1.525 1.475 2.75T12 14Z"/>
    </Icon>
  );
});

IconMaterialLocalMallFilled.displayName = 'AmauiIconMaterialLocalMallFilled';

export default IconMaterialLocalMallFilled;
