import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckSharpFilled'
      short_name='LibraryAddCheck'

      {...props}
    >
      <path d="M12.7 14.05 18.35 8.4 16.95 6.95 12.7 11.2 10.55 9.1 9.15 10.5ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialLibraryAddCheckSharpFilled;
