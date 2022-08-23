import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeselectSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectSharp'
      short_name='Deselect'

      {...props}
    >
      <path d="M3 13V11H5V13ZM7 21V19H9V21ZM11 5V3H13V5ZM19 5V3Q19.825 3 20.413 3.587Q21 4.175 21 5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19H5ZM3 17V15H5V17ZM11 21V19H13V21ZM19 13V11H21V13ZM19 9V7H21V9ZM15 5V3H17V5ZM9 15H12.175L9 11.825ZM15 21V19H17V21ZM17 14.175 15 12.175V9H11.825L9.825 7H17ZM3 9V7H5V9ZM19.775 22.6 14.175 17H7V9.825L1.4 4.225L2.8 2.8L21.2 21.2ZM9 3V5H7.825L7 4.175V3ZM21 15V17H19.825L19 16.175V15Z"/>
    </Icon>
  );
});

IconMaterialDeselectSharp.displayName = 'AmauiIconMaterialDeselectSharp';

export default IconMaterialDeselectSharp;
