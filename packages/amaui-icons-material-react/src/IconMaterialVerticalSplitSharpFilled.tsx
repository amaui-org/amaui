import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitSharpFilled'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M3 7V5H11V7ZM13 19V5H21V19ZM3 11V9H11V11ZM3 15V13H11V15ZM3 19V17H11V19Z"/>
    </Icon>
  );
});

export default IconMaterialVerticalSplitSharpFilled;
