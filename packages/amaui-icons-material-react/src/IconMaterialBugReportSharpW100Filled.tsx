import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBugReportSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportSharpW100Filled'
      short_name='BugReport'

      {...props}
    >
      <path d="M12 19.7Q10.725 19.7 9.663 19.075Q8.6 18.45 7.95 17.35H5.15V16.65H7.6Q7.4 16.075 7.35 15.337Q7.3 14.6 7.3 13.35H5.15V12.65H7.3Q7.3 11.4 7.35 10.6Q7.4 9.8 7.6 9.35H5.15V8.65H7.95Q8.3 8.05 8.925 7.487Q9.55 6.925 10.2 6.65L8.35 4.8L8.8 4.35L10.9 6.45Q11.475 6.3 12 6.3Q12.525 6.3 13.1 6.45L15.25 4.35L15.7 4.8L13.85 6.65Q14.5 6.925 15.1 7.487Q15.7 8.05 16.05 8.65H18.85V9.35H16.4Q16.6 9.8 16.65 10.6Q16.7 11.4 16.7 12.65H18.85V13.35H16.7Q16.7 14.6 16.65 15.337Q16.6 16.075 16.4 16.65H18.85V17.35H16.05Q15.4 18.45 14.338 19.075Q13.275 19.7 12 19.7ZM10.4 11.35H13.6V10.65H10.4ZM10.4 15.35H13.6V14.65H10.4Z"/>
    </Icon>
  );
});

IconMaterialBugReportSharpW100Filled.displayName = 'AmauiIconMaterialBugReportSharpW100Filled';

export default IconMaterialBugReportSharpW100Filled;
