import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNodataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodataW100'

      short_name='SignalCellularNodata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.025 20.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.812-.163.463.188.463.688v6.85h-5.4q-.625 0-1.063.437-.437.438-.437 1.063v5.4Zm8.2-.85q-.125-.125-.125-.25t.125-.25l1.85-1.85-1.85-1.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l1.85 1.85 1.85-1.85q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-1.85 1.85 1.85 1.85q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125L16.575 18l-1.85 1.85q-.1.1-.237.112-.138.013-.263-.112Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodataW100.displayName = 'AmauiIconMaterialSignalCellularNodataW100';

export default IconMaterialSignalCellularNodataW100;
