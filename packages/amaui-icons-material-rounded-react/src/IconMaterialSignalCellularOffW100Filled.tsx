import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffW100Filled'

      short_name='SignalCellularOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.2 17.75-6.3-6.3 5.025-5.025q.35-.35.813-.163.462.188.462.688ZM5.45 20.7q-.5 0-.687-.463-.188-.462.162-.812L10.95 13.4 4.2 6.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.8 15.8q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-1.75-1.75Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffW100Filled.displayName = 'AmauiIconMaterialSignalCellularOffW100Filled';

export default IconMaterialSignalCellularOffW100Filled;
