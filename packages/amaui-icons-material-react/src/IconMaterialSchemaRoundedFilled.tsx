import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchemaRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaRoundedFilled'
      short_name='Schema'

      {...props}
    >
      <path d="M5.5 23Q4.875 23 4.438 22.562Q4 22.125 4 21.5V18.5Q4 17.875 4.438 17.438Q4.875 17 5.5 17H6.5V15H5.5Q4.875 15 4.438 14.562Q4 14.125 4 13.5V10.5Q4 9.875 4.438 9.438Q4.875 9 5.5 9H6.5V7H5.5Q4.875 7 4.438 6.562Q4 6.125 4 5.5V2.5Q4 1.875 4.438 1.438Q4.875 1 5.5 1H9.5Q10.125 1 10.562 1.438Q11 1.875 11 2.5V5.5Q11 6.125 10.562 6.562Q10.125 7 9.5 7H8.5V9H9.5Q10.125 9 10.562 9.438Q11 9.875 11 10.5V11H14V10.5Q14 9.875 14.438 9.438Q14.875 9 15.5 9H19.5Q20.125 9 20.562 9.438Q21 9.875 21 10.5V13.5Q21 14.125 20.562 14.562Q20.125 15 19.5 15H15.5Q14.875 15 14.438 14.562Q14 14.125 14 13.5V13H11V13.5Q11 14.125 10.562 14.562Q10.125 15 9.5 15H8.5V17H9.5Q10.125 17 10.562 17.438Q11 17.875 11 18.5V21.5Q11 22.125 10.562 22.562Q10.125 23 9.5 23Z"/>
    </Icon>
  );
});

IconMaterialSchemaRoundedFilled.displayName = 'AmauiIconMaterialSchemaRoundedFilled';

export default IconMaterialSchemaRoundedFilled;
