import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharpFilled'
      short_name='Window'

      {...props}
    >
      <path d="M11 11H2V2H11ZM13 11V2H22V11ZM11 13V22H2V13ZM22 22H13V13H22Z"/>
    </Icon>
  );
});

IconMaterialWindowSharpFilled.displayName = 'AmauiIconMaterialWindowSharpFilled';

export default IconMaterialWindowSharpFilled;
