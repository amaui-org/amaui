import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataArrayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayFilled'

      short_name='DataArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 18V6h-2q-.425 0-.712-.287Q15 5.425 15 5t.288-.713Q15.575 4 16 4h2q.825 0 1.413.588Q20 5.175 20 6v12q0 .825-.587 1.413Q18.825 20 18 20h-2q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18ZM6 18h2q.425 0 .713.288Q9 18.575 9 19t-.287.712Q8.425 20 8 20H6q-.825 0-1.412-.587Q4 18.825 4 18V6q0-.825.588-1.412Q5.175 4 6 4h2q.425 0 .713.287Q9 4.575 9 5t-.287.713Q8.425 6 8 6H6Z"/>
    </Icon>
  );
});

IconMaterialDataArrayFilled.displayName = 'AmauiIconMaterialDataArrayFilled';

export default IconMaterialDataArrayFilled;
