import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kSharpW100Filled'
      short_name='4k'

      {...props}
    >
      <path d="M12.85 14.6H13.55V12.2L16 14.6H17.05L14.3 11.95L17.05 9.4H16.05L13.55 11.75V9.4H12.85ZM7 13.1H9.7V14.6H10.4V13.1H11.7V12.4H10.4V9.4H9.7V12.4H7.7V9.4H7ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterial4kSharpW100Filled;
