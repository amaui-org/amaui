import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropRotateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateW100Filled'

      short_name='CropRotate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 14.3V9.8q0-.3-.25-.55Q14.5 9 14.2 9H9.7v-.7h4.5q.625 0 1.063.437.437.438.437 1.063v4.5Zm.35 3.4q-.15 0-.25-.1t-.1-.25V15.7H9.8q-.625 0-1.062-.438Q8.3 14.825 8.3 14.2V9H6.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H8.3V6.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.55q0 .3.25.55.25.25.55.25h8.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H15.7v1.65q0 .15-.1.25t-.25.1ZM22.3 11q-.125 0-.213-.088-.087-.087-.112-.212-.5-3.75-3.35-6.225Q15.775 2 11.95 2l1.8 1.8q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125l-2.225-2.225q-.275-.275-.2-.513.075-.237.475-.262h.65q4.1 0 7.125 2.65Q22.1 6.6 22.65 10.625q.025.15-.075.262-.1.113-.275.113ZM12.05 22.7q-4.1 0-7.125-2.65Q1.9 17.4 1.35 13.375q-.025-.15.075-.262.1-.113.275-.113.125 0 .213.087.087.088.112.213.5 3.75 3.35 6.225Q8.225 22 12.05 22l-1.8-1.8q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.225 2.225q.275.275.2.513-.075.237-.475.262h-.65Z"/>
    </Icon>
  );
});

IconMaterialCropRotateW100Filled.displayName = 'AmauiIconMaterialCropRotateW100Filled';

export default IconMaterialCropRotateW100Filled;
