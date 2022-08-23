import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeSharpFilled'
      short_name='AutoAwesome'

      {...props}
    >
      <path d="M19 9 17.75 6.25 15 5 17.75 3.75 19 1 20.25 3.75 23 5 20.25 6.25ZM19 23 17.75 20.25 15 19 17.75 17.75 19 15 20.25 17.75 23 19 20.25 20.25ZM9 20 6.5 14.5 1 12 6.5 9.5 9 4 11.5 9.5 17 12 11.5 14.5Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeSharpFilled.displayName = 'AmauiIconMaterialAutoAwesomeSharpFilled';

export default IconMaterialAutoAwesomeSharpFilled;
