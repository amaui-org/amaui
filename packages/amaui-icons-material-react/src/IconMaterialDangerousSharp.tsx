import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDangerousSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousSharp'
      short_name='Dangerous'

      {...props}
    >
      <path d="M8.25 21 3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21ZM9.15 16.25 12 13.4 14.85 16.25 16.25 14.85 13.4 12 16.25 9.15 14.85 7.75 12 10.6 9.15 7.75 7.75 9.15 10.6 12 7.75 14.85ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDangerousSharp.displayName = 'AmauiIconMaterialDangerousSharp';

export default IconMaterialDangerousSharp;
