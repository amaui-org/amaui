import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryW100Filled'

      short_name='ChangeHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 18.7q-.45 0-.65-.388-.2-.387.025-.762l6.3-10.075q.225-.35.625-.35t.625.35l6.3 10.075q.225.375.025.762-.2.388-.65.388Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100Filled.displayName = 'AmauiIconMaterialChangeHistoryW100Filled';

export default IconMaterialChangeHistoryW100Filled;
