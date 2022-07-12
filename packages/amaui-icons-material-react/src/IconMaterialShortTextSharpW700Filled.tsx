import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShortTextSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextSharpW700Filled'
      short_name='ShortText'

      {...props}
    >
      <path d="M3.425 11V7.85H20.575V11ZM3.425 16.15V13H14.575V16.15Z"/>
    </Icon>
  )
});

export default IconMaterialShortTextSharpW700Filled;
