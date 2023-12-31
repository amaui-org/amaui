import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulseAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulseAlert'

      short_name='PulseAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-494ZM87-560q-4-15-5.5-30T80-621q0-94 63-156.5T300-840q51 0 98.5 22t81.5 62q34-40 81-62t99-22q94 0 157 62.5T880-621v2q-19-17-41-29.5T792-669q-14-41-50-66t-82-25q-43 0-83 25.5T503-660h-46q-33-48-74-74t-83-26q-59 0-99.5 40.5T160-621q0 16 3 30.5t9 30.5H87Zm393 440L353-234q-27-25-50-46t-43-40h117q23 20 48.5 43t54.5 49q17-14 31.5-27t28.5-26q14 15 29.5 27.5T603-231L480-120ZM40-400v-80h178l103-152 101 152h62q-2 10-3 19.5t-1 20.5q0 11 1 20.5t3 19.5H379l-59-88-59 88H40Zm680 120q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Zm-40-120v-200h80v200h-80Z"/>
    </Icon>
  );
});

IconMaterialPulseAlert.displayName = 'AmauiIconMaterialPulseAlert';

export default IconMaterialPulseAlert;
