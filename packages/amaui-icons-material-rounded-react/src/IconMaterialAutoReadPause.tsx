import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPause = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPause'

      short_name='AutoReadPause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 14q.425 0 .713-.288Q11 13.425 11 13V7q0-.425-.287-.713Q10.425 6 10 6t-.712.287Q9 6.575 9 7v6q0 .425.288.712Q9.575 14 10 14Zm4 0q.425 0 .713-.288Q15 13.425 15 13V7q0-.425-.287-.713Q14.425 6 14 6t-.712.287Q13 6.575 13 7v6q0 .425.288.712.287.288.712.288ZM3.7 20.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6Zm.3-3.125L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPause.displayName = 'AmauiIconMaterialAutoReadPause';

export default IconMaterialAutoReadPause;
