import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountTreeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeSharpFilled'
      short_name='AccountTree'

      {...props}
    >
      <path d="M15 21V18H11V8H9V11H2V3H9V6H15V3H22V11H15V8H13V16H15V13H22V21Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeSharpFilled.displayName = 'AmauiIconMaterialAccountTreeSharpFilled';

export default IconMaterialAccountTreeSharpFilled;
