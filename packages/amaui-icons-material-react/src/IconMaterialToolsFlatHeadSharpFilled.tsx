import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadSharpFilled'
      short_name='ToolsFlatHead'

      {...props}
    >
      <path d="M8 21v-2h8v2Zm0-3-1-7 2-8h6l2 8-1 7Zm6.7-8-1.25-5h-2.9L9.3 10Z"/>
    </Icon>
  );
});

export default IconMaterialToolsFlatHeadSharpFilled;
