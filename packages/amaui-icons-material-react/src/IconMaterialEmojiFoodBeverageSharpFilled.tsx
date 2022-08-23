import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFoodBeverageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageSharpFilled'
      short_name='EmojiFoodBeverage'

      {...props}
    >
      <path d="M4 21V19H20V21ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18ZM4 17V3H9V5.4L7 7V12H12V7L10 5.4V3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V17Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageSharpFilled.displayName = 'AmauiIconMaterialEmojiFoodBeverageSharpFilled';

export default IconMaterialEmojiFoodBeverageSharpFilled;
