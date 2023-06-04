import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChangeHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistory'

      short_name='ChangeHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 20q-.575 0-.875-.512-.3-.513.025-1.013l8.2-13.125q.3-.475.85-.475t.85.475l8.2 13.125q.325.5.025 1.013-.3.512-.875.512Zm1.8-2h12.8L12 7.75Zm6.4-5.125Z"/>
    </Icon>
  );
});

IconMaterialChangeHistory.displayName = 'AmauiIconMaterialChangeHistory';

export default IconMaterialChangeHistory;
