import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStopScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopScreenShareFilled'

      short_name='StopScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.7 17.85-6.275-6.275 1.225-1.225q.05-.05.15-.35 0-.1-.037-.188-.038-.087-.113-.162l-1.8-1.8q-.25-.25-.55-.125-.3.125-.3.475V9h-1.15l-6-6H20q.825 0 1.413.587Q22 4.175 22 5v11q0 .65-.362 1.137-.363.488-.938.713Zm-.9 4.75L18.2 21H2q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h14.175l-1-1H4q-.825 0-1.412-.587Q2 16.825 2 16V4.85l-.625-.65Q1.1 3.9 1.1 3.5q0-.4.3-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM9 14q.425 0 .713-.288Q10 13.425 10 13v-.175L8.175 11q-.125.225-.15.475Q8 11.725 8 12v1q0 .425.288.712Q8.575 14 9 14Z"/>
    </Icon>
  );
});

IconMaterialStopScreenShareFilled.displayName = 'AmauiIconMaterialStopScreenShareFilled';

export default IconMaterialStopScreenShareFilled;
