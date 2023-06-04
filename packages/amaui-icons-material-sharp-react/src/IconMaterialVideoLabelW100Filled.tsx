import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelW100Filled'

      short_name='VideoLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 15h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialVideoLabelW100Filled.displayName = 'AmauiIconMaterialVideoLabelW100Filled';

export default IconMaterialVideoLabelW100Filled;
