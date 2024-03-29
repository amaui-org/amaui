import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShare'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.425 11.575 11.85 9H13v-.8q0-.35.3-.475t.55.125l1.8 1.8q.05.05.15.35 0 .05-.15.35ZM20.7 17.85 18.85 16H20V5H7.85l-2-2H20q.825 0 1.413.587Q22 4.175 22 5v11q0 .65-.362 1.137-.363.488-.938.713Zm-.9 4.75L18.2 21H2q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h14.175l-1-1H4q-.825 0-1.412-.587Q2 16.825 2 16V4.85l-.625-.65Q1.1 3.9 1.1 3.5q0-.4.3-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM10 12.85V13q0 .425-.287.712Q9.425 14 9 14t-.712-.288Q8 13.425 8 13v-1q0-.275.025-.525t.15-.475L4 6.825V16h9.15Zm2-2.35Zm-3.425.9Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShare.displayName = 'AmauiIconMaterialStopScreenShare';

export default IconMaterialStopScreenShare;
