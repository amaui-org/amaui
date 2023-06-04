import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorToolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorToolFilled'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.775 22-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorToolFilled.displayName = 'AmauiIconMaterialArrowSelectorToolFilled';

export default IconMaterialArrowSelectorToolFilled;
