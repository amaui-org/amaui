import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolW100Filled'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.375 19.6-3.25-7-3.175 4.425V3.95l10.3 8.1h-5.525l3.2 6.825Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolW100Filled.displayName = 'AmauiIconMaterialArrowSelectorToolW100Filled';

export default IconMaterialArrowSelectorToolW100Filled;
