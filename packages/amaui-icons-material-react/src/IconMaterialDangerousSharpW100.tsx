import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDangerousSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousSharpW100'
      short_name='Dangerous'

      {...props}
    >
      <path d="M8.8 19.7 4.3 15.2V8.8L8.8 4.3H15.2L19.7 8.8V15.2L15.2 19.7ZM9.15 15.35 12 12.5 14.85 15.35 15.35 14.85 12.5 12 15.35 9.15 14.85 8.65 12 11.5 9.15 8.65 8.65 9.15 11.5 12 8.65 14.85ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDangerousSharpW100.displayName = 'AmauiIconMaterialDangerousSharpW100';

export default IconMaterialDangerousSharpW100;
