import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryW100'

      short_name='ChangeHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 18.7q-.45 0-.65-.388-.2-.387.025-.762l6.3-10.075q.225-.35.625-.35t.625.35l6.3 10.075q.225.375.025.762-.2.388-.65.388Zm-.1-.7h12.8L12 7.75Zm6.4-5.125Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100.displayName = 'AmauiIconMaterialChangeHistoryW100';

export default IconMaterialChangeHistoryW100;
