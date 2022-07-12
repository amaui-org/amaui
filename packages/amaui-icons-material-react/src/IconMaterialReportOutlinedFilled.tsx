import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOutlinedFilled'
      short_name='Report'

      {...props}
    >
      <path d="M8.25 21 3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM11 13H13V7H11Z"/>
    </Icon>
  )
});

export default IconMaterialReportOutlinedFilled;
