import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontFilled'

      short_name='FlipToFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19h2Zm-2-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4 12v-2h2v2Zm2-4q-.825 0-1.412-.587Q7 15.825 7 15V5q0-.825.588-1.413Q8.175 3 9 3h10q.825 0 1.413.587Q21 4.175 21 5v10q0 .825-.587 1.413Q19.825 17 19 17Zm0-2h10V5H9v10Zm2 6v-2h2v2Zm4 0v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontFilled.displayName = 'AmauiIconMaterialFlipToFrontFilled';

export default IconMaterialFlipToFrontFilled;
