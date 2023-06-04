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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7.77L5.61 18h12.78z" opacity=".3"/><path d="M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"/>
    </Icon>
  );
});

IconMaterialChangeHistory.displayName = 'AmauiIconMaterialChangeHistory';

export default IconMaterialChangeHistory;
