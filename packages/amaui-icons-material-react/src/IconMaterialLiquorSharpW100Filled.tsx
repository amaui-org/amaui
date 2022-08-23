import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiquorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorSharpW100Filled'
      short_name='Liquor'

      {...props}
    >
      <path d="M4.4 20.7V20H5.95V16.5Q5.2 16.35 4.8 15.838Q4.4 15.325 4.4 14.65V8.15H8.2V14.65Q8.2 15.3 7.8 15.825Q7.4 16.35 6.65 16.5V20H8.2V20.7ZM5.1 12.35H7.5V8.85H5.1ZM12.2 20.7V10L15.2 8.85V3.6H17.6V8.85L20.6 9.975V20.7ZM15.9 5.4H16.9V4.3H15.9ZM12.9 12.9H19.9V10.45L16.9 9.35V6.1H15.9V9.35L12.9 10.45ZM12.9 20H19.9V17.15H12.9Z"/>
    </Icon>
  );
});

IconMaterialLiquorSharpW100Filled.displayName = 'AmauiIconMaterialLiquorSharpW100Filled';

export default IconMaterialLiquorSharpW100Filled;
