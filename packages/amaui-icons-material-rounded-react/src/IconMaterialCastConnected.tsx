import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastConnected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnected'

      short_name='CastConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 8H7q2.65 1.1 4.588 3.188Q13.525 13.275 14.35 16H17q.425 0 .712-.288Q18 15.425 18 15V9q0-.425-.288-.713Q17.425 8 17 8Zm-2 12v-2h5V6H4v1H2V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM2 20h3q0-1.25-.875-2.125T2 17Zm5 0h2q0-2.925-2.037-4.963Q4.925 13 2 13v2q2.075 0 3.537 1.462Q7 17.925 7 20ZM2 9v2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20h2q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9Zm9 4Z"/>
    </Icon>
  );
});

IconMaterialCastConnected.displayName = 'AmauiIconMaterialCastConnected';

export default IconMaterialCastConnected;
