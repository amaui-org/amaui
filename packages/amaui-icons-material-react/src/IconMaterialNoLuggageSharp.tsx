import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoLuggageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageSharp'
      short_name='NoLuggage'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H17Q17 21.425 16.712 21.712Q16.425 22 16 22Q15.575 22 15.288 21.712Q15 21.425 15 21H9Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21H5V7.825L0.675 3.5L2.1 2.075L21.9 21.875ZM8 18V10.825L7 9.825V19H16.175L15.175 18H14.5V17.325L12.75 15.575V18H11.25V14.075L9.5 12.325V18ZM19 16.125 17 14.125V8H10.875L8.875 6H9V2H15V6H19ZM16 13.125 14.5 11.625V9H16ZM12.75 9.875 11.875 9H12.75ZM10.5 6H13.5V3.5H10.5ZM13.95 11.05ZM11.6 14.4Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageSharp.displayName = 'AmauiIconMaterialNoLuggageSharp';

export default IconMaterialNoLuggageSharp;
