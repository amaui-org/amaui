import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sd'

      short_name='Sd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 15h3q.425 0 .713-.288Q11 14.425 11 14v-1.5q0-.425-.287-.713-.288-.287-.713-.287H7.5v-1h2v.5H11v-1q0-.425-.287-.713Q10.425 9 10 9H7q-.425 0-.713.287Q6 9.575 6 10v1.5q0 .425.287.712.288.288.713.288h2.5v1h-2V13H6v1q0 .425.287.712Q6.575 15 7 15Zm6 0h4q.425 0 .712-.288Q18 14.425 18 14v-4q0-.425-.288-.713Q17.425 9 17 9h-4Zm1.5-1.5v-3h2v3ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12V6Zm16 12V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialSd.displayName = 'AmauiIconMaterialSd';

export default IconMaterialSd;
