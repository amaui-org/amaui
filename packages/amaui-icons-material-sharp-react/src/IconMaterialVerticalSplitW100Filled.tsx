import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100Filled'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 7v-.7H11V7Zm10 10.7V6.3h5.4v11.4Zm-10-7.15v-.7H11v.7Zm0 3.6v-.7H11v.7Zm0 3.55V17H11v.7Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100Filled.displayName = 'AmauiIconMaterialVerticalSplitW100Filled';

export default IconMaterialVerticalSplitW100Filled;
