import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopChromebookSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebookSharpFilled'
      short_name='LaptopChromebook'

      {...props}
    >
      <path d="M0 20V18H2V3H22V18H24V20ZM10 18H14V17H10Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebookSharpFilled.displayName = 'AmauiIconMaterialLaptopChromebookSharpFilled';

export default IconMaterialLaptopChromebookSharpFilled;
