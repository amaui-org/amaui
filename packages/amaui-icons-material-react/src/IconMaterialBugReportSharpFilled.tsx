import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBugReportSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReportSharpFilled'
      short_name='BugReport'

      {...props}
    >
      <path d="M12 21Q10.35 21 8.975 20.175Q7.6 19.35 6.8 18H4V16H6.1Q6.025 15.425 6.013 15.012Q6 14.6 6 14H4V12H6Q6 11.325 6.013 10.887Q6.025 10.45 6.1 10H4V8H6.8Q7.15 7.4 7.588 6.912Q8.025 6.425 8.6 6.05L7 4.4L8.4 3L10.55 5.15Q11.125 4.95 11.975 4.95Q12.825 4.95 13.4 5.15L15.6 3L17 4.4L15.35 6.05Q15.925 6.425 16.388 6.912Q16.85 7.4 17.2 8H20V10H17.9Q17.975 10.575 17.988 10.95Q18 11.325 18 12H20V14H18Q18 14.6 17.988 15.012Q17.975 15.425 17.9 16H20V18H17.2Q16.4 19.35 15.025 20.175Q13.65 21 12 21ZM10 12H14V10H10ZM10 16H14V14H10Z"/>
    </Icon>
  );
});

IconMaterialBugReportSharpFilled.displayName = 'AmauiIconMaterialBugReportSharpFilled';

export default IconMaterialBugReportSharpFilled;
