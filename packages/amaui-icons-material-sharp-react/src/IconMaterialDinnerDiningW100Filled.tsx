import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDinnerDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DinnerDiningW100Filled'

      short_name='DinnerDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.625 20.3-.7-.7h18.1l-.7.7Zm.45-2.7q.125-.225.325-.5t.475-.55v-8h-1v-.7h1v-1h-1v-.7h1v-1h-1v-.7h7.45v1.7h9.75v.7h-9.75v1.7h-3.25v6.85q.675.05 1.312.3.638.25 1.088.7.15-1.35 1.388-2.425Q13.1 12.9 14.975 12.9q1.925 0 3.263 1.175 1.337 1.175 1.337 2.825v.7Zm4-11.45h2.55v-1h-2.55Zm0 1.7h2.55v-1h-2.55Zm-2.5-1.7h1.8v-1h-1.8Zm0 1.7h1.8v-1h-1.8Zm0 8.15q.425-.275.85-.413.425-.137.95-.187V8.55h-1.8Z"/>
    </Icon>
  );
});

IconMaterialDinnerDiningW100Filled.displayName = 'AmauiIconMaterialDinnerDiningW100Filled';

export default IconMaterialDinnerDiningW100Filled;
