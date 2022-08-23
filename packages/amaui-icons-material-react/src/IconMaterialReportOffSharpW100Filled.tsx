import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffSharpW100Filled'
      short_name='ReportOff'

      {...props}
    >
      <path d="M20.4 21.4 16.95 17.95 15.2 19.7H8.8L4.3 15.2V8.8L6.05 7.05L2.6 3.6L3.1 3.1L20.9 20.9ZM18.9 16.1 12.35 9.55V7.5H11.65V8.85L7.95 5.15L8.8 4.3H15.2L19.7 8.8V15.2ZM12 16.25Q12.225 16.25 12.363 16.1Q12.5 15.95 12.5 15.75Q12.5 15.65 12.463 15.562Q12.425 15.475 12.35 15.4Q12.275 15.325 12.188 15.287Q12.1 15.25 12 15.25Q11.775 15.25 11.637 15.4Q11.5 15.55 11.5 15.75Q11.5 15.95 11.637 16.1Q11.775 16.25 12 16.25Z"/>
    </Icon>
  );
});

IconMaterialReportOffSharpW100Filled.displayName = 'AmauiIconMaterialReportOffSharpW100Filled';

export default IconMaterialReportOffSharpW100Filled;
