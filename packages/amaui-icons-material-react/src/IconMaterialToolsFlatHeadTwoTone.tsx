import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadTwoTone'
      short_name='ToolsFlatHead'

      {...props}
    >
      <path d="M7.5 22.25v-3.025h9.025v3.025Zm0-4.125-1.05-7.9 2.1-8.55h6.875l2.15 8.55-1.075 7.9Zm-.6-8.65 8.125 2.5-.375-7.4-3.2-2.5Z"/>
    </Icon>
  )
});

export default IconMaterialToolsFlatHeadTwoTone;
