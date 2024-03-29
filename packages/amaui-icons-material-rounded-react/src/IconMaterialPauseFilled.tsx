import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseFilled'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19q-.825 0-1.412-.587Q13 17.825 13 17V7q0-.825.588-1.412Q14.175 5 15 5h2q.825 0 1.413.588Q19 6.175 19 7v10q0 .825-.587 1.413Q17.825 19 17 19Zm-8 0q-.825 0-1.412-.587Q5 17.825 5 17V7q0-.825.588-1.412Q6.175 5 7 5h2q.825 0 1.413.588Q11 6.175 11 7v10q0 .825-.587 1.413Q9.825 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialPauseFilled.displayName = 'AmauiIconMaterialPauseFilled';

export default IconMaterialPauseFilled;
