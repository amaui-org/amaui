import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDresserFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserFilled'

      short_name='Dresser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v16h-2v-2H6v2Zm2-10h5V5H6Zm7-4h5V5h-5Zm0 4h5V9h-5Zm-3 5h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialDresserFilled.displayName = 'AmauiIconMaterialDresserFilled';

export default IconMaterialDresserFilled;
