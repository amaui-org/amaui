import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInbox'

      short_name='AllInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16h12v-3h-2.55q-.525.925-1.45 1.462-.925.538-2 .538-1.05 0-1.975-.538Q11.1 13.925 10.55 13H8Zm6-3q.85 0 1.425-.588Q16 11.825 16 11h4V4H8v7h4q0 .825.588 1.412Q13.175 13 14 13Zm-8 5V2h16v16Zm-4 4V6h2v14h14v2Zm6-6h12Z"/>
    </Icon>
  );
});

IconMaterialAllInbox.displayName = 'AmauiIconMaterialAllInbox';

export default IconMaterialAllInbox;
