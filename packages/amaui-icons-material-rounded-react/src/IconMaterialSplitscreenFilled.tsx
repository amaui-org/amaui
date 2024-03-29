import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenFilled'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 11q-.825 0-1.412-.588Q4 9.825 4 9V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v5q0 .825-.587 1.412Q18.825 11 18 11Zm0 11q-.825 0-1.412-.587Q4 20.825 4 20v-5q0-.825.588-1.413Q5.175 13 6 13h12q.825 0 1.413.587Q20 14.175 20 15v5q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenFilled.displayName = 'AmauiIconMaterialSplitscreenFilled';

export default IconMaterialSplitscreenFilled;
