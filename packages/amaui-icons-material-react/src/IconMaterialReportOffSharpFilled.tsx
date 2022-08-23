import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffSharpFilled'
      short_name='ReportOff'

      {...props}
    >
      <path d="M20.5 23.3 16.95 19.75 15.75 21H8.25L3 15.7V8.25L4.2 7.05L0.7 3.5L2.1 2.1L21.9 21.9ZM19.8 16.95 13 10.2V7H11V8.2L7.05 4.2L8.25 3H15.75L21 8.25V15.7ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.925 13 15.887Q13 15.85 13 15.85L12.15 15Q12.15 15 12.113 15Q12.075 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialReportOffSharpFilled.displayName = 'AmauiIconMaterialReportOffSharpFilled';

export default IconMaterialReportOffSharpFilled;
