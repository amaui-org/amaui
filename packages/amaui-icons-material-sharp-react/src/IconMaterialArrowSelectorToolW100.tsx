import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorToolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolW100'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.65 14.85 2.5-3.5h5.075L7.65 5.4Zm5.725 4.75-3.25-7-3.175 4.425V3.95l10.3 8.1h-5.525l3.2 6.825Zm-3.225-8.25Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolW100.displayName = 'AmauiIconMaterialArrowSelectorToolW100';

export default IconMaterialArrowSelectorToolW100;
