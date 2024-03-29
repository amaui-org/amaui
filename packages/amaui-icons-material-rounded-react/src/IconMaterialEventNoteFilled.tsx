import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteFilled'

      short_name='EventNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12h8q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 14 16 14Zm0 4q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16h5q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 18 13 18Zm-3 4q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/>
    </Icon>
  );
});

IconMaterialEventNoteFilled.displayName = 'AmauiIconMaterialEventNoteFilled';

export default IconMaterialEventNoteFilled;
