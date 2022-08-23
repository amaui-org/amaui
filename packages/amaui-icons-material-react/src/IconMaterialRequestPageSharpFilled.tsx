import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestPageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageSharpFilled'
      short_name='RequestPage'

      {...props}
    >
      <path d="M11 18H13V17H15V12H11V11H15V9H13V8H11V9H9V14H13V15H9V17H11ZM4 22V2H14L20 8V22Z"/>
    </Icon>
  );
});

IconMaterialRequestPageSharpFilled.displayName = 'AmauiIconMaterialRequestPageSharpFilled';

export default IconMaterialRequestPageSharpFilled;
