import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageSharp'
      short_name='Garage'

      {...props}
    >
      <path d="M2 22V2H22V22ZM4 20H20V4H4ZM9 14Q9.425 14 9.713 13.712Q10 13.425 10 13Q10 12.575 9.713 12.287Q9.425 12 9 12Q8.575 12 8.288 12.287Q8 12.575 8 13Q8 13.425 8.288 13.712Q8.575 14 9 14ZM15 14Q15.425 14 15.713 13.712Q16 13.425 16 13Q16 12.575 15.713 12.287Q15.425 12 15 12Q14.575 12 14.288 12.287Q14 12.575 14 13Q14 13.425 14.288 13.712Q14.575 14 15 14ZM5 18.5H7V16.5H17V18.5H19V11.1L17.075 5.5H6.925L5 11.1ZM7.65 9.5 8.35 7.5H15.65L16.35 9.5ZM7 14.5V11.5H17V14.5ZM4 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialGarageSharp.displayName = 'AmauiIconMaterialGarageSharp';

export default IconMaterialGarageSharp;
