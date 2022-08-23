import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReportOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffSharp'
      short_name='ReportOff'

      {...props}
    >
      <path d="M19.8 16.95 18.35 15.55 19 14.9V9.1L14.9 5H9.1L8.45 5.65L7.05 4.2L8.25 3H15.75L21 8.25V15.7ZM13 10.2V7H11V8.2ZM20.5 23.3 16.95 19.75 15.75 21H8.25L3 15.7V8.25L4.2 7.05L0.7 3.5L2.1 2.1L21.9 21.9ZM13.4 10.6ZM9.1 19H14.9L15.55 18.35L5.65 8.45L5 9.1V14.9ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialReportOffSharp.displayName = 'AmauiIconMaterialReportOffSharp';

export default IconMaterialReportOffSharp;
