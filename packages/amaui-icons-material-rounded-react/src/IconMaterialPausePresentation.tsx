import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPausePresentation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentation'

      short_name='PausePresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16q.425 0 .713-.288Q11 15.425 11 15V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9v6q0 .425.288.712Q9.575 16 10 16Zm4 0q.425 0 .713-.288Q15 15.425 15 15V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9v6q0 .425.288.712.287.288.712.288ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialPausePresentation.displayName = 'AmauiIconMaterialPausePresentation';

export default IconMaterialPausePresentation;
