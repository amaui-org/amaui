import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareFilled'

      short_name='ScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14q.425 0 .713-.288Q10 13.425 10 13v-1q0-.425.288-.713Q10.575 11 11 11h2v.8q0 .35.3.475t.55-.125l1.8-1.8q.05-.05.15-.35 0-.05-.15-.35l-1.8-1.8q-.25-.25-.55-.125-.3.125-.3.475V9h-2q-1.25 0-2.125.875T8 12v1q0 .425.288.712Q8.575 14 9 14Zm-5 4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialScreenShareFilled.displayName = 'AmauiIconMaterialScreenShareFilled';

export default IconMaterialScreenShareFilled;
