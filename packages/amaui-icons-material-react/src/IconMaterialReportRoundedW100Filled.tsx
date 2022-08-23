import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportRoundedW100Filled'
      short_name='Report'

      {...props}
    >
      <path d="M9.425 19.7Q9.125 19.7 8.85 19.587Q8.575 19.475 8.35 19.25L4.75 15.65Q4.525 15.425 4.412 15.15Q4.3 14.875 4.3 14.575V9.425Q4.3 9.125 4.412 8.85Q4.525 8.575 4.75 8.35L8.35 4.75Q8.575 4.525 8.85 4.412Q9.125 4.3 9.425 4.3H14.575Q14.875 4.3 15.15 4.412Q15.425 4.525 15.65 4.75L19.25 8.35Q19.475 8.575 19.588 8.85Q19.7 9.125 19.7 9.425V14.575Q19.7 14.875 19.588 15.15Q19.475 15.425 19.25 15.65L15.65 19.25Q15.425 19.475 15.15 19.587Q14.875 19.7 14.575 19.7ZM12 16.25Q12.225 16.25 12.363 16.1Q12.5 15.95 12.5 15.75Q12.5 15.525 12.363 15.387Q12.225 15.25 12 15.25Q11.8 15.25 11.65 15.387Q11.5 15.525 11.5 15.75Q11.5 15.95 11.65 16.1Q11.8 16.25 12 16.25ZM12 13.6Q12.15 13.6 12.25 13.5Q12.35 13.4 12.35 13.25V7.85Q12.35 7.7 12.25 7.6Q12.15 7.5 12 7.5Q11.85 7.5 11.75 7.6Q11.65 7.7 11.65 7.85V13.25Q11.65 13.4 11.75 13.5Q11.85 13.6 12 13.6Z"/>
    </Icon>
  );
});

IconMaterialReportRoundedW100Filled.displayName = 'AmauiIconMaterialReportRoundedW100Filled';

export default IconMaterialReportRoundedW100Filled;
