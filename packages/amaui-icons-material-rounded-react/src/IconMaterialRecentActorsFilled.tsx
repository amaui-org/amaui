import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsFilled'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h10q.825 0 1.413.588Q15 6.175 15 7v10q0 .825-.587 1.413Q13.825 19 13 19Zm15 0q-.425 0-.712-.288Q17 18.425 17 18V6q0-.425.288-.713Q17.575 5 18 5t.712.287Q19 5.575 19 6v12q0 .425-.288.712Q18.425 19 18 19Zm4 0q-.425 0-.712-.288Q21 18.425 21 18V6q0-.425.288-.713Q21.575 5 22 5t.712.287Q23 5.575 23 6v12q0 .425-.288.712Q22.425 19 22 19ZM3 15.35q1.1-.65 2.35-1T8 14q1.4 0 2.65.35t2.35 1V7H3Zm5-2.1q-1.15 0-1.95-.8t-.8-1.95q0-1.15.8-1.95T8 7.75q1.15 0 1.95.8t.8 1.95q0 1.15-.8 1.95t-1.95.8Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsFilled.displayName = 'AmauiIconMaterialRecentActorsFilled';

export default IconMaterialRecentActorsFilled;
