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
      <path d="M8 21v-2h8v2Zm0-3-1-7 2-8h6l2 8-1 7Zm1.725-2h4.55l.55-4H9.15Zm4.975-6-1.25-5h-2.9L9.3 10Zm-.425 6h-4.55 4.55Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadTwoTone.displayName = 'AmauiIconMaterialToolsFlatHeadTwoTone';

export default IconMaterialToolsFlatHeadTwoTone;
