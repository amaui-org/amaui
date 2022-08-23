import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageSharpFilled'
      short_name='Garage'

      {...props}
    >
      <path d="M2 22V2H22V22ZM9 14Q8.575 14 8.288 13.712Q8 13.425 8 13Q8 12.575 8.288 12.287Q8.575 12 9 12Q9.425 12 9.713 12.287Q10 12.575 10 13Q10 13.425 9.713 13.712Q9.425 14 9 14ZM15 14Q14.575 14 14.288 13.712Q14 13.425 14 13Q14 12.575 14.288 12.287Q14.575 12 15 12Q15.425 12 15.713 12.287Q16 12.575 16 13Q16 13.425 15.713 13.712Q15.425 14 15 14ZM5 18.5H7V16.5H17V18.5H19V11.1L17.075 5.5H6.925L5 11.1ZM7.65 9.5 8.35 7.5H15.65L16.35 9.5Z"/>
    </Icon>
  );
});

IconMaterialGarageSharpFilled.displayName = 'AmauiIconMaterialGarageSharpFilled';

export default IconMaterialGarageSharpFilled;
