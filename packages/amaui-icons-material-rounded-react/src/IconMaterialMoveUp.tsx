import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveUp'

      short_name='MoveUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-2.925 0-4.962-2.038Q1 15.925 1 13q0-2.7 1.775-4.7t4.4-2.3l-.9-.9Q6 4.825 6 4.412 6 4 6.3 3.7q.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.287Q6.6 10.6 6.3 10.3q-.275-.275-.275-.688 0-.412.275-.712l.775-.8q-1.75.35-2.913 1.7Q3 11.15 3 13q0 2.075 1.463 3.538Q5.925 18 8 18h2q.425 0 .713.288.287.287.287.712t-.287.712Q10.425 20 10 20Zm7 0q-.825 0-1.412-.587Q13 18.825 13 18v-3q0-.825.588-1.413Q14.175 13 15 13h5q.825 0 1.413.587Q22 14.175 22 15v3q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h5v-3h-5Zm0-7q-.825 0-1.412-.588Q13 9.825 13 9V6q0-.825.588-1.412Q14.175 4 15 4h5q.825 0 1.413.588Q22 5.175 22 6v3q0 .825-.587 1.412Q20.825 11 20 11Z"/>
    </Icon>
  );
});

IconMaterialMoveUp.displayName = 'AmauiIconMaterialMoveUp';

export default IconMaterialMoveUp;
