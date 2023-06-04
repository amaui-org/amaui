import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBugReportW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportW100'

      short_name='BugReport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-1.275 0-2.337-.625Q8.6 18.45 7.95 17.35h-2.8v-.7H7.6q-.275-.8-.288-1.638-.012-.837-.012-1.662H5.15v-.7H7.3q0-.85-.012-1.688-.013-.837.312-1.612H5.15v-.7h2.8q.375-.675.95-1.188.575-.512 1.3-.812L8.35 4.8l.45-.45 2.1 2.1q.55-.15 1.1-.15t1.1.15l2.15-2.1.45.45-1.85 1.85q.725.3 1.275.812.55.513.925 1.188h2.8v.7H16.4q.325.775.312 1.612-.012.838-.012 1.688h2.15v.7H16.7q0 .825-.012 1.662-.013.838-.288 1.638h2.45v.7h-2.8q-.65 1.1-1.712 1.725-1.063.625-2.338.625Zm0-.7q1.65 0 2.825-1.175Q16 16.65 16 15v-4q0-1.65-1.175-2.825Q13.65 7 12 7q-1.65 0-2.825 1.175Q8 9.35 8 11v4q0 1.65 1.175 2.825Q10.35 19 12 19Zm-1.6-3.65h3.2v-.7h-3.2Zm0-4h3.2v-.7h-3.2ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialBugReportW100.displayName = 'AmauiIconMaterialBugReportW100';

export default IconMaterialBugReportW100;
