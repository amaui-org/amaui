import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReadMoreSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreSharpW700Filled'
      short_name='ReadMore'

      {...props}
    >
      <path d="M7.45 18.25 5.25 16.05 7.7 13.575H1.425V10.425H7.7L5.25 7.95L7.45 5.75L13.7 12ZM13.2 9V5.85H22.575V9ZM13.2 18.15V15H22.575V18.15ZM16.2 13.575V10.425H22.575V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialReadMoreSharpW700Filled;
