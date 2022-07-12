import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitSharpW700'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M2.15 7.375V4.225H21.85V7.375ZM2.15 12.15V9H21.85V12.15ZM2.15 19.775V13.775H21.85V19.775Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalSplitSharpW700;
