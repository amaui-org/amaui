import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedFilled'

      short_name='CastConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 16H17q.425 0 .712-.288Q18 15.425 18 15V9q0-.425-.288-.713Q17.425 8 17 8H7q2.65 1.1 4.588 3.188Q13.525 13.275 14.35 16ZM13 20q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm-4 0q0-2.925-2.037-4.963Q4.925 13 2 13v-2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20Zm-4 0q0-1.25-.875-2.125T2 17v-2q2.075 0 3.537 1.462Q7 17.925 7 20Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedFilled.displayName = 'AmauiIconMaterialCastConnectedFilled';

export default IconMaterialCastConnectedFilled;
