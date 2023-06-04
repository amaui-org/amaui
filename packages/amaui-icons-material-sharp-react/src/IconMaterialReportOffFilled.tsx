import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffFilled'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.5 23.3-3.55-3.55-1.2 1.25h-7.5L3 15.7V8.25l1.2-1.2L.7 3.5l1.4-1.4 19.8 19.8Zm-.7-6.35L13 10.2V7h-2v1.2l-3.95-4L8.25 3h7.5L21 8.25v7.45ZM12 17q.425 0 .713-.288Q13 16.425 13 16v-.15l-.85-.85H12q-.425 0-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialReportOffFilled.displayName = 'AmauiIconMaterialReportOffFilled';

export default IconMaterialReportOffFilled;
