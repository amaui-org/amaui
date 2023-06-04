import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTop'

      short_name='AlignVerticalTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,2v2H2V2H22z M7,22h3V6H7V22z M14,16h3V6h-3V16z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTop.displayName = 'AmauiIconMaterialAlignVerticalTop';

export default IconMaterialAlignVerticalTop;
