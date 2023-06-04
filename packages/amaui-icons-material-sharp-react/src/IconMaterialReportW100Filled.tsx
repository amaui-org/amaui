import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportW100Filled'

      short_name='Report'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.8 19.7-4.5-4.5V8.8l4.5-4.5h6.4l4.5 4.5v6.4l-4.5 4.5Zm3.2-3.45q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm-.35-2.65h.7V7.5h-.7Z"/>
    </Icon>
  );
});

IconMaterialReportW100Filled.displayName = 'AmauiIconMaterialReportW100Filled';

export default IconMaterialReportW100Filled;
