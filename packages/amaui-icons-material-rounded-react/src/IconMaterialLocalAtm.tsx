import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtm'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 16h1q0 .425.288.712.287.288.712.288t.713-.288Q13 16.425 13 16h1q.425 0 .713-.288Q15 15.425 15 15v-3q0-.425-.287-.713Q14.425 11 14 11h-3v-1h3q.425 0 .713-.288Q15 9.425 15 9t-.287-.713Q14.425 8 14 8h-1q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8h-1q-.425 0-.712.287Q9 8.575 9 9v3q0 .425.288.712Q9.575 13 10 13h3v1h-3q-.425 0-.712.287Q9 14.575 9 15t.288.712Q9.575 16 10 16Zm-6 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialLocalAtm.displayName = 'AmauiIconMaterialLocalAtm';

export default IconMaterialLocalAtm;
