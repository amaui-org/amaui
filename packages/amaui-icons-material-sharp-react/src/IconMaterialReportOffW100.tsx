import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReportOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReportOffW100'

      short_name='ReportOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.9 16.1-.55-.55.65-.65V9.1L14.9 5H9.1l-.65.65-.5-.5.85-.85h6.4l4.5 4.5v6.4Zm-6.55-6.55V7.5h-.7v1.35ZM20.4 21.4l-3.45-3.45-1.75 1.75H8.8l-4.5-4.5V8.8l1.75-1.75L2.6 3.6l.5-.5 17.8 17.8Zm-7-10.8ZM9.1 19h5.8l1.55-1.55-9.9-9.9L5 9.1v5.8Zm2.9-2.75q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-.5-3.75Z"/>
    </Icon>
  );
});

IconMaterialReportOffW100.displayName = 'AmauiIconMaterialReportOffW100';

export default IconMaterialReportOffW100;
