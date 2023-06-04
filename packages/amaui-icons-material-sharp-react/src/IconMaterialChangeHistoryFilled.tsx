import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryFilled'

      short_name='ChangeHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20 12 4l10 16Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryFilled.displayName = 'AmauiIconMaterialChangeHistoryFilled';

export default IconMaterialChangeHistoryFilled;
