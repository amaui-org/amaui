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
      <path d="M3.8 20q-.575 0-.875-.512-.3-.513.025-1.013l8.2-13.125q.3-.475.85-.475t.85.475l8.2 13.125q.325.5.025 1.013-.3.512-.875.512Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryFilled.displayName = 'AmauiIconMaterialChangeHistoryFilled';

export default IconMaterialChangeHistoryFilled;
