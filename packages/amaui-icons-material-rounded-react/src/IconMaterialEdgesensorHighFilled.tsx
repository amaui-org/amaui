import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighFilled'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14q-.425 0-.712-.288Q3 13.425 3 13V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v5q0 .425-.287.712Q4.425 14 4 14Zm-3 3q-.425 0-.712-.288Q0 16.425 0 16v-5q0-.425.288-.713Q.575 10 1 10t.712.287Q2 10.575 2 11v5q0 .425-.288.712Q1.425 17 1 17Zm22-3q-.425 0-.712-.288Q22 13.425 22 13V8q0-.425.288-.713Q22.575 7 23 7t.712.287Q24 7.575 24 8v5q0 .425-.288.712Q23.425 14 23 14Zm-3 3q-.425 0-.712-.288Q19 16.425 19 16v-5q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v5q0 .425-.288.712Q20.425 17 20 17ZM8 22q-.825 0-1.412-.587Q6 20.825 6 20V4q0-.825.588-1.413Q7.175 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v16q0 .825-.587 1.413Q16.825 22 16 22Zm0-5h8V7H8Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighFilled.displayName = 'AmauiIconMaterialEdgesensorHighFilled';

export default IconMaterialEdgesensorHighFilled;
