import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStories = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStories'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20V4q.825 0 1.413.588Q19 5.175 19 6v12q0 .825-.587 1.413Q17.825 20 17 20ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h9q.825 0 1.413.587Q15 3.175 15 4v16q0 .825-.587 1.413Q13.825 22 13 22Zm17-4V6q.625 0 1.062.438.438.437.438 1.062v9q0 .625-.438 1.062Q21.625 18 21 18ZM4 20h9V4H4v16ZM4 4v16V4Z"/>
    </Icon>
  );
});

IconMaterialWebStories.displayName = 'AmauiIconMaterialWebStories';

export default IconMaterialWebStories;
