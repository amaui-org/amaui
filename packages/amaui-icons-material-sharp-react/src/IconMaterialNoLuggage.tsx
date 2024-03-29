import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoLuggage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggage'

      short_name='NoLuggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16.125-2-2V8h-6.125l-2-2H9V2h6v4h4Zm-3-3-1.5-1.5V9H16Zm-3.25-3.25L11.875 9h.875ZM10.5 6h3V3.5h-3ZM8 22q-.425 0-.713-.288Q7 21.425 7 21H5V6.175h1.2L8.025 8H7v11h10v-2.025l2 2V21h-2q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22Zm12.475 1.3L.675 3.5 2.1 2.075l19.8 19.8ZM8 18V7.975l1.5 1.5V18Zm3.25-6.775 1.5 1.5V18h-1.5Zm3.25 3.25 1.5 1.5V18h-1.5Zm-.55-3.425ZM11.6 14.4Z"/>
    </Icon>
  );
});

IconMaterialNoLuggage.displayName = 'AmauiIconMaterialNoLuggage';

export default IconMaterialNoLuggage;
