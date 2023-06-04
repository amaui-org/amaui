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
      <path d="M2 20 12 4l10 16Zm3.6-2h12.8L12 7.75Zm6.4-5.125Z"/>
    </Icon>
  );
});

IconMaterialChangeHistory.displayName = 'AmauiIconMaterialChangeHistory';

export default IconMaterialChangeHistory;
