import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityOutlinedFilled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 15 1.4-3.1 3.1-1.4-3.1-1.4L12 6l-1.4 3.1-3.1 1.4 3.1 1.4Zm-8 3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-3 3v-2h22v2Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityOutlinedFilled;
