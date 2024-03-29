import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteForeverFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverFilled'

      short_name='DeleteForever'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.9 1.9 1.9q.3.275.713.275.412 0 .687-.275.3-.3.3-.713 0-.412-.3-.687l-1.9-1.9 1.9-1.9q.3-.3.3-.713 0-.412-.3-.687-.275-.3-.687-.3-.413 0-.713.3L12 11.1l-1.9-1.9q-.275-.3-.687-.3-.413 0-.713.3-.275.275-.275.687 0 .413.275.713l1.9 1.9-1.9 1.9q-.275.275-.275.687 0 .413.275.713.3.275.713.275.412 0 .687-.275ZM7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverFilled.displayName = 'AmauiIconMaterialDeleteForeverFilled';

export default IconMaterialDeleteForeverFilled;
