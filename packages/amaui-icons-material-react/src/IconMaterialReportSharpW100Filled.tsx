import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportSharpW100Filled'
      short_name='Report'

      {...props}
    >
      <path d="M8.8 19.7 4.3 15.2V8.8L8.8 4.3H15.2L19.7 8.8V15.2L15.2 19.7ZM12 16.25Q12.225 16.25 12.363 16.1Q12.5 15.95 12.5 15.75Q12.5 15.525 12.363 15.387Q12.225 15.25 12 15.25Q11.8 15.25 11.65 15.387Q11.5 15.525 11.5 15.75Q11.5 15.95 11.65 16.1Q11.8 16.25 12 16.25ZM11.65 13.6H12.35V7.5H11.65Z"/>
    </Icon>
  );
});

IconMaterialReportSharpW100Filled.displayName = 'AmauiIconMaterialReportSharpW100Filled';

export default IconMaterialReportSharpW100Filled;
