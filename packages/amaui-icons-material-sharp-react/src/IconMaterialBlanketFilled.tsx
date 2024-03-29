import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlanketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlanketFilled'

      short_name='Blanket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-1.275 0-2.137-.9Q1 19.2 1 18V6q0-1.275.863-2.138Q2.725 3 4 3h8q1.2 0 2.1.862.9.863.9 2.138v6.3h1q.825 0 1.413.587.587.588.587 1.413v3.2q0 .225.138.363.137.137.362.137.225 0 .363-.137.137-.138.137-.363V11q-.825 0-1.413-.588Q17 9.825 17 9V6h1V4h1.5v2h1V4H22v2h1v3q0 .825-.587 1.412Q21.825 11 21 11v6.4q0 1.05-.725 1.775-.725.725-1.775.725-1.05 0-1.775-.725Q16 18.45 16 17.4v-3.2h-1V17q0 1.65-1.175 2.825Q12.65 21 11 21Zm0-2h7q.825 0 1.413-.587Q13 17.825 13 17q0-.825-.587-1.412Q11.825 15 11 15H6.5q-.225 0-.362.137Q6 15.275 6 15.5q0 .225.138.363.137.137.362.137H11q.45 0 .725.312.275.313.275.688 0 .375-.275.688Q11.45 18 11 18H6.5q-1.05 0-1.775-.725Q4 16.55 4 15.5q0-1.05.725-1.775Q5.45 13 6.5 13H11q.525 0 1.038.15.512.15.962.45V6q0-.45-.275-.725Q12.45 5 12 5H4q-.375 0-.688.275Q3 5.55 3 6v12q0 .375.312.688Q3.625 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialBlanketFilled.displayName = 'AmauiIconMaterialBlanketFilled';

export default IconMaterialBlanketFilled;
