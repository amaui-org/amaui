import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSelectCheckBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxSharp'
      short_name='SelectCheckBox'

      {...props}
    >
      <path d="M11.525 17 5.875 11.35 7.275 9.95 11.525 14.2 20.7 5.025 22.125 6.4ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.2 3 19.375 3.037Q19.55 3.075 19.725 3.15L17.875 5Q17.875 5 17.875 5Q17.875 5 17.875 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V12.35L21 10.35V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxSharp.displayName = 'AmauiIconMaterialSelectCheckBoxSharp';

export default IconMaterialSelectCheckBoxSharp;
