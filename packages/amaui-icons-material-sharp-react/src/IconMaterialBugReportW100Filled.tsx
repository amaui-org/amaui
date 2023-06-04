import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBugReportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportW100Filled'

      short_name='BugReport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-1.275 0-2.337-.625Q8.6 18.45 7.95 17.35h-2.8v-.7H7.6q-.2-.575-.25-1.313-.05-.737-.05-1.987H5.15v-.7H7.3q0-1.25.05-2.05.05-.8.25-1.25H5.15v-.7h2.8q.35-.6.975-1.163.625-.562 1.275-.837L8.35 4.8l.45-.45 2.1 2.1q.575-.15 1.1-.15.525 0 1.1.15l2.15-2.1.45.45-1.85 1.85q.65.275 1.25.837.6.563.95 1.163h2.8v.7H16.4q.2.45.25 1.25.05.8.05 2.05h2.15v.7H16.7q0 1.25-.05 1.987-.05.738-.25 1.313h2.45v.7h-2.8q-.65 1.1-1.712 1.725-1.063.625-2.338.625Zm-1.6-8.35h3.2v-.7h-3.2Zm0 4h3.2v-.7h-3.2Z"/>
    </Icon>
  );
});

IconMaterialBugReportW100Filled.displayName = 'AmauiIconMaterialBugReportW100Filled';

export default IconMaterialBugReportW100Filled;
