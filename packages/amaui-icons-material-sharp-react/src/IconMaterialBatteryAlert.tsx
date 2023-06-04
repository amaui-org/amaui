import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlert'

      short_name='BatteryAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm5.05-4q.425 0 .738-.312.312-.313.312-.738t-.312-.738q-.313-.312-.738-.312t-.738.312q-.312.313-.312.738t.312.738q.313.312.738.312ZM11 14h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlert.displayName = 'AmauiIconMaterialBatteryAlert';

export default IconMaterialBatteryAlert;
