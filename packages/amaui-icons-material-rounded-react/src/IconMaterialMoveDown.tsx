import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveDown'

      short_name='MoveDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.275 20.275Q6 20 6 19.6t.275-.7l.9-.95q-2.625-.3-4.4-2.275Q1 13.7 1 11q0-2.925 2.038-4.963Q5.075 4 8 4h2q.425 0 .713.287Q11 4.575 11 5t-.287.713Q10.425 6 10 6H8Q5.925 6 4.463 7.462 3 8.925 3 11q0 1.85 1.162 3.2 1.163 1.35 2.913 1.7l-.775-.775q-.275-.275-.275-.687 0-.413.275-.713.3-.3.713-.3.412 0 .712.3L10.3 16.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.725-.3ZM15 11q-.825 0-1.412-.588Q13 9.825 13 9V6q0-.825.588-1.412Q14.175 4 15 4h5q.825 0 1.413.588Q22 5.175 22 6v3q0 .825-.587 1.412Q20.825 11 20 11Zm0-2h5V6h-5Zm0 11q-.825 0-1.412-.587Q13 18.825 13 18v-3q0-.825.588-1.413Q14.175 13 15 13h5q.825 0 1.413.587Q22 14.175 22 15v3q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialMoveDown.displayName = 'AmauiIconMaterialMoveDown';

export default IconMaterialMoveDown;
