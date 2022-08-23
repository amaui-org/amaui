import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kSharpW100'
      short_name='10k'

      {...props}
    >
      <path d="M14.6 14.6H15.3V12.2L17.75 14.6H18.8L16.05 11.95L18.8 9.4H17.8L15.3 11.75V9.4H14.6ZM7 14.6H7.7V9.4H5.5V10.1H7ZM9.3 14.6H13V9.4H9.3ZM10 13.9V10.1H12.3V13.9ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial10kSharpW100.displayName = 'AmauiIconMaterial10kSharpW100';

export default IconMaterial10kSharpW100;
