import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFrames = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFrames'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V6q0-.825.588-1.412Q3.175 4 4 4h4L11.3.7q.3-.3.7-.3.4 0 .7.3L16 4h4q.825 0 1.413.588Q22 5.175 22 6v14q0 .825-.587 1.413Q20.825 22 20 22Zm0-2h16V6H4v14Zm3-2q-.425 0-.713-.288Q6 17.425 6 17V9q0-.425.287-.713Q6.575 8 7 8h10q.425 0 .712.287Q18 8.575 18 9v8q0 .425-.288.712Q17.425 18 17 18Zm1-2v-6 6Zm0 0h8v-6H8Z"/>
    </Icon>
  );
});

IconMaterialFilterFrames.displayName = 'AmauiIconMaterialFilterFrames';

export default IconMaterialFilterFrames;
