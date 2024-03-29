import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSliding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSliding'

      short_name='DoorSliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 13q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11t.713.287Q10 11.575 10 12t-.287.712Q9.425 13 9 13Zm6 0q-.425 0-.712-.288Q14 12.425 14 12t.288-.713Q14.575 11 15 11t.713.287Q16 11.575 16 12t-.287.712Q15.425 13 15 13ZM3 21v-2h1V3h16v16h1v2Zm3-2h5V5H6Zm7 0h5V5h-5Zm-1-8Z"/>
    </Icon>
  );
});

IconMaterialDoorSliding.displayName = 'AmauiIconMaterialDoorSliding';

export default IconMaterialDoorSliding;
