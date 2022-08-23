import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookSharpFilled'
      short_name='Book'

      {...props}
    >
      <path d="M4 22V2H20V22ZM11 4V11L13.5 9.5L16 11V4Z"/>
    </Icon>
  );
});

IconMaterialBookSharpFilled.displayName = 'AmauiIconMaterialBookSharpFilled';

export default IconMaterialBookSharpFilled;
