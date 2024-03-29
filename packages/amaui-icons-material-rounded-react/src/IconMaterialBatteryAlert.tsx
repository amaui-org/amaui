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
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm4.05-4q.425 0 .738-.312.312-.313.312-.738t-.312-.738q-.313-.312-.738-.312t-.738.312q-.312.313-.312.738t.312.738q.313.312.738.312ZM12 14q.425 0 .713-.288Q13 13.425 13 13V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlert.displayName = 'AmauiIconMaterialBatteryAlert';

export default IconMaterialBatteryAlert;
