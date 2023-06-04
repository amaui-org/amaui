import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportW100Filled'

      short_name='Report'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 19.7q-.3 0-.575-.113-.275-.112-.5-.337l-3.6-3.6q-.225-.225-.338-.5-.112-.275-.112-.575v-5.15q0-.3.112-.575.113-.275.338-.5l3.6-3.6q.225-.225.5-.338.275-.112.575-.112h5.15q.3 0 .575.112.275.113.5.338l3.6 3.6q.225.225.338.5.112.275.112.575v5.15q0 .3-.112.575-.113.275-.338.5l-3.6 3.6q-.225.225-.5.337-.275.113-.575.113ZM12 16.25q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0-2.65q.15 0 .25-.1t.1-.25v-5.4q0-.15-.1-.25T12 7.5q-.15 0-.25.1t-.1.25v5.4q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialReportW100Filled.displayName = 'AmauiIconMaterialReportW100Filled';

export default IconMaterialReportW100Filled;
