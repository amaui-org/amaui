import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowFilled'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.825 0-1.412-.587Q6 20.825 6 20V4q0-.825.588-1.413Q7.175 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v16q0 .825-.587 1.413Q16.825 22 16 22Zm0-5h8V7H8Zm-5-3q-.425 0-.712-.288Q2 13.425 2 13V8q0-.425.288-.713Q2.575 7 3 7t.713.287Q4 7.575 4 8v5q0 .425-.287.712Q3.425 14 3 14Zm18 3q-.425 0-.712-.288Q20 16.425 20 16v-5q0-.425.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11v5q0 .425-.288.712Q21.425 17 21 17Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowFilled.displayName = 'AmauiIconMaterialEdgesensorLowFilled';

export default IconMaterialEdgesensorLowFilled;
