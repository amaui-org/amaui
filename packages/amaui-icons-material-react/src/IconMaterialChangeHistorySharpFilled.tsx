import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChangeHistorySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistorySharpFilled'
      short_name='ChangeHistory'

      {...props}
    >
      <path d="M2 20 12 4 22 20Z"/>
    </Icon>
  );
});

IconMaterialChangeHistorySharpFilled.displayName = 'AmauiIconMaterialChangeHistorySharpFilled';

export default IconMaterialChangeHistorySharpFilled;
