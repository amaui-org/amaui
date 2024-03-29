import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoFilled'

      short_name='MusicVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm6.5-3q1.05 0 1.775-.725Q13 15.55 13 14.5V9h2q.425 0 .713-.288Q16 8.425 16 8t-.287-.713Q15.425 7 15 7h-2q-.425 0-.712.287Q12 7.575 12 8v4.5q-.325-.225-.7-.363-.375-.137-.8-.137-1.05 0-1.775.725Q8 13.45 8 14.5q0 1.05.725 1.775Q9.45 17 10.5 17Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoFilled.displayName = 'AmauiIconMaterialMusicVideoFilled';

export default IconMaterialMusicVideoFilled;
