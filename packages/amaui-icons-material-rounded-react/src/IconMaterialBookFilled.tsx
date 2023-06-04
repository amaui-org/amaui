import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookFilled'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm5.75-11.45L13.5 9.5l1.75 1.05q.25.15.5 0t.25-.425V4h-5v6.125q0 .275.25.425.25.15.5 0Z"/>
    </Icon>
  );
});

IconMaterialBookFilled.displayName = 'AmauiIconMaterialBookFilled';

export default IconMaterialBookFilled;
