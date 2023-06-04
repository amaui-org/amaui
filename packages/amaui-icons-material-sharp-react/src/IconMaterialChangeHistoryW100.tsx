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
      <path d="M4.35 18.7 12 6.45l7.65 12.25ZM5.6 18h12.8L12 7.75Zm6.4-5.125Z"/>
    </Icon>
  );
});

IconMaterialChangeHistoryW100.displayName = 'AmauiIconMaterialChangeHistoryW100';

export default IconMaterialChangeHistoryW100;
