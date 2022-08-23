import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer10SelectSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectSharpFilled'
      short_name='Timer10Select'

      {...props}
    >
      <path d="M10 16H13V8H10ZM7 19V5H16V19ZM3 19V8H1V5H6V19ZM17 19V17H21V16H17V11H23V13H19V14H23V19Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectSharpFilled.displayName = 'AmauiIconMaterialTimer10SelectSharpFilled';

export default IconMaterialTimer10SelectSharpFilled;
