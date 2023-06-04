import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadFilled'

      short_name='ToolsFlatHead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2h8v2Zm0-3-1-7 2-8h6l2 8-1 7Zm6.7-8-1.25-5h-2.9L9.3 10Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadFilled.displayName = 'AmauiIconMaterialToolsFlatHeadFilled';

export default IconMaterialToolsFlatHeadFilled;
