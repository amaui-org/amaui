import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftW100Filled'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialDraftW100Filled.displayName = 'AmauiIconMaterialDraftW100Filled';

export default IconMaterialDraftW100Filled;
