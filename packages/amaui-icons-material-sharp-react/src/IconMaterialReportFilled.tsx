import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportFilled'

      short_name='Report'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 21 3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21ZM12 17q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm-1-4h2V7h-2Z"/>
    </Icon>
  );
});

IconMaterialReportFilled.displayName = 'AmauiIconMaterialReportFilled';

export default IconMaterialReportFilled;
