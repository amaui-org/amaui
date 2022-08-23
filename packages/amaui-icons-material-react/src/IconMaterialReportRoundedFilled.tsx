import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportRoundedFilled'
      short_name='Report'

      {...props}
    >
      <path d="M9.075 21Q8.675 21 8.312 20.85Q7.95 20.7 7.675 20.425L3.575 16.325Q3.3 16.05 3.15 15.688Q3 15.325 3 14.925V9.075Q3 8.675 3.15 8.312Q3.3 7.95 3.575 7.675L7.675 3.575Q7.95 3.3 8.312 3.15Q8.675 3 9.075 3H14.925Q15.325 3 15.688 3.15Q16.05 3.3 16.325 3.575L20.425 7.675Q20.7 7.95 20.85 8.312Q21 8.675 21 9.075V14.925Q21 15.325 20.85 15.688Q20.7 16.05 20.425 16.325L16.325 20.425Q16.05 20.7 15.688 20.85Q15.325 21 14.925 21ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12V8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V12Q11 12.425 11.288 12.712Q11.575 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialReportRoundedFilled.displayName = 'AmauiIconMaterialReportRoundedFilled';

export default IconMaterialReportRoundedFilled;
