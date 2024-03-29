import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOff'

      short_name='ContentPasteOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5.85l-.925-.925q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l17 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-.925-.9Zm0-2h11.15L5 7.85V19Zm16-.85-2-2V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8h-4.15l-5-5h3.325q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOff.displayName = 'AmauiIconMaterialContentPasteOff';

export default IconMaterialContentPasteOff;
