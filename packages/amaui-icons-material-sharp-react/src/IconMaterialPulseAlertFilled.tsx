import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulseAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulseAlertFilled'

      short_name='PulseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M121-480q-22-35-31.5-69.5T80-621q0-94 63-156.5T300-840q51 0 98.5 22t81.5 62q34-40 81-62t99-22q94 0 157 63.5T880-619q-32-29-73-45t-87-16q-90 0-156 57.5T484-480h-62L321-632 218-480h-97Zm359 360L353-234q-61-55-101.5-94.5T182-400h79l59-88 59 88h105q9 55 40.5 99t78.5 70L480-120Zm200-280v-200h80v200h-80Zm40 120q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Z"/>
    </Icon>
  );
});

IconMaterialPulseAlertFilled.displayName = 'AmauiIconMaterialPulseAlertFilled';

export default IconMaterialPulseAlertFilled;
