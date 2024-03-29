import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBugReportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportFilled'

      short_name='BugReport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.65 0-3.025-.825T6.8 18H4v-2h2.1q-.075-.575-.087-.988Q6 14.6 6 14H4v-2h2q0-.675.013-1.113.012-.437.087-.887H4V8h2.8q.35-.6.788-1.088.437-.487 1.012-.862L7 4.4 8.4 3l2.15 2.15q.575-.2 1.425-.2.85 0 1.425.2L15.6 3 17 4.4l-1.65 1.65q.575.375 1.038.862Q16.85 7.4 17.2 8H20v2h-2.1q.075.575.088.95Q18 11.325 18 12h2v2h-2q0 .6-.012 1.012-.013.413-.088.988H20v2h-2.8q-.8 1.35-2.175 2.175Q13.65 21 12 21Zm-2-9h4v-2h-4Zm0 4h4v-2h-4Z"/>
    </Icon>
  );
});

IconMaterialBugReportFilled.displayName = 'AmauiIconMaterialBugReportFilled';

export default IconMaterialBugReportFilled;
