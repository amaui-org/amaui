import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsSharpW100'
      short_name='TableRows'

      {...props}
    >
      <path d="M19 18.2V15.125H5V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2ZM19 14.425V9.575H5V14.425H19ZM19 8.875V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V8.875H19ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialTableRowsSharpW100.displayName = 'AmauiIconMaterialTableRowsSharpW100';

export default IconMaterialTableRowsSharpW100;
