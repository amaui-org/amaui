import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kSharpW100'
      short_name='1k'

      {...props}
    >
      <path d="M12.7 14.6H13.4V12.2L15.85 14.6H16.9L14.15 11.95L16.9 9.4H15.9L13.4 11.75V9.4H12.7ZM8.9 14.6H9.6V9.4H7.4V10.1H8.9ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial1kSharpW100.displayName = 'AmauiIconMaterial1kSharpW100';

export default IconMaterial1kSharpW100;
