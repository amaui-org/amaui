import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLamp'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.425 0-.712-.288Q11 18.425 11 18v-7H6q-.5 0-.8-.4-.3-.4-.15-.9L7 3.4q.2-.65.725-1.025Q8.25 2 8.9 2h6.2q.65 0 1.175.375T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v7q0 .425-.287.712Q12.425 19 12 19ZM7.35 9h9.3L15.1 4H8.9ZM9 22q-.425 0-.712-.288Q8 21.425 8 21t.288-.712Q8.575 20 9 20h6q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22Zm3-15.5Z"/>
    </Icon>
  );
});

IconMaterialFloorLamp.displayName = 'AmauiIconMaterialFloorLamp';

export default IconMaterialFloorLamp;
