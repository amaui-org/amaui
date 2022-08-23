import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter4SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4SharpFilled'
      short_name='Filter4'

      {...props}
    >
      <path d="M6 18V2H22V18ZM2 22V6H4V20H18V22ZM15 15H17V5H15V9H13V5H11V11H15Z"/>
    </Icon>
  );
});

IconMaterialFilter4SharpFilled.displayName = 'AmauiIconMaterialFilter4SharpFilled';

export default IconMaterialFilter4SharpFilled;
