import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentActors = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActors'

      short_name='RecentActors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h10q.825 0 1.413.588Q15 6.175 15 7v10q0 .825-.587 1.413Q13.825 19 13 19Zm5-2Zm-5-1.65q1.1-.65 2.35-1T8 14q1.4 0 2.65.35t2.35 1V7H3ZM18 19q-.425 0-.712-.288Q17 18.425 17 18V6q0-.425.288-.713Q17.575 5 18 5t.712.287Q19 5.575 19 6v12q0 .425-.288.712Q18.425 19 18 19Zm4 0q-.425 0-.712-.288Q21 18.425 21 18V6q0-.425.288-.713Q21.575 5 22 5t.712.287Q23 5.575 23 6v12q0 .425-.288.712Q22.425 19 22 19ZM8 13.25q-1.125 0-1.938-.812-.812-.813-.812-1.938t.812-1.938Q6.875 7.75 8 7.75t1.938.812q.812.813.812 1.938t-.812 1.938q-.813.812-1.938.812Zm0-2.75ZM4.15 17h7.7q-.875-.5-1.85-.75Q9.025 16 8 16t-2 .25q-.975.25-1.85.75ZM8 11.4q.375 0 .637-.263.263-.262.263-.637t-.263-.637Q8.375 9.6 8 9.6t-.637.263q-.263.262-.263.637t.263.637q.262.263.637.263Z"/>
    </Icon>
  );
});

IconMaterialRecentActors.displayName = 'AmauiIconMaterialRecentActors';

export default IconMaterialRecentActors;
