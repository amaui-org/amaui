import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInboxFilled'

      short_name='AllInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13q.85 0 1.425-.588Q16 11.825 16 11h4V4H8v7h4q0 .825.588 1.412Q13.175 13 14 13Zm-8 5V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialAllInboxFilled.displayName = 'AmauiIconMaterialAllInboxFilled';

export default IconMaterialAllInboxFilled;
