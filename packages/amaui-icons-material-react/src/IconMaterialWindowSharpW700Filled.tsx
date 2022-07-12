import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharpW700Filled'
      short_name='Window'

      {...props}
    >
      <path d="M11 11H1.15V1.15H11ZM13 11V1.15H22.85V11ZM11 13V22.85H1.15V13ZM22.85 22.85H13V13H22.85Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSharpW700Filled;
