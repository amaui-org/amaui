import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeFilled'

      short_name='Colorize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-4.75l8.95-8.95-1.45-1.4 1.45-1.4 1.9 1.9 3.8-3.8 3.75 3.75-3.775 3.775 1.9 1.95L18.1 13.5l-1.4-1.45L7.75 21Zm2-2h1.95l8.3-8.35-1.9-1.9L5 17.05Z"/>
    </Icon>
  );
});

IconMaterialColorizeFilled.displayName = 'AmauiIconMaterialColorizeFilled';

export default IconMaterialColorizeFilled;
