import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Splitscreen'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 9h12V4H6v5Zm0 2q-.825 0-1.412-.588Q4 9.825 4 9V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v5q0 .825-.587 1.412Q18.825 11 18 11Zm0 9h12v-5H6v5Zm0 2q-.825 0-1.412-.587Q4 20.825 4 20v-5q0-.825.588-1.413Q5.175 13 6 13h12q.825 0 1.413.587Q20 14.175 20 15v5q0 .825-.587 1.413Q18.825 22 18 22ZM6 9V4v5Zm0 11v-5 5Z"/>
    </Icon>
  );
});

IconMaterialSplitscreen.displayName = 'AmauiIconMaterialSplitscreen';

export default IconMaterialSplitscreen;
