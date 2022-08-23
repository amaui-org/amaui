import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoLuggageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageSharpFilled'
      short_name='NoLuggage'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H17Q17 21.425 16.712 21.712Q16.425 22 16 22Q15.575 22 15.288 21.712Q15 21.425 15 21H9Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21H5V7.825L0.675 3.5L2.1 2.075L21.9 21.875ZM8 10.825V18H9.5V12.325ZM14.5 17.325V18H15.175ZM11.25 14.075V18H12.75V15.575ZM10.5 6H13.5V3.5H10.5ZM19 16.125 16 13.125V9H14.5V11.625L12.75 9.875V9H11.875L8.875 6H9V2H15V6H19Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageSharpFilled.displayName = 'AmauiIconMaterialNoLuggageSharpFilled';

export default IconMaterialNoLuggageSharpFilled;
