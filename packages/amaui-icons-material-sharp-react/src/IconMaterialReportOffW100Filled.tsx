import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100Filled'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.4 21.4-3.45-3.45-1.75 1.75H8.8l-4.5-4.5V8.8l1.75-1.75L2.6 3.6l.5-.5 17.8 17.8Zm-1.5-5.3-6.55-6.55V7.5h-.7v1.35l-3.7-3.7.85-.85h6.4l4.5 4.5v6.4Zm-6.9.15q.225 0 .363-.15.137-.15.137-.35 0-.1-.037-.188-.038-.087-.113-.162-.075-.075-.162-.113-.088-.037-.188-.037-.225 0-.363.15-.137.15-.137.35 0 .2.137.35.138.15.363.15Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100Filled.displayName = 'AmauiIconMaterialReportOffW100Filled';

export default IconMaterialReportOffW100Filled;
