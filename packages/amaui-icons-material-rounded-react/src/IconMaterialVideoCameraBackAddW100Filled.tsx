import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackAddW100Filled'

      short_name='VideoCameraBackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M217-212q-26 0-43-17t-17-43v-182q0-10.73 9-16.37 9-5.63 19-1.63 16 5 32.33 8.5Q233.65-460 251-460q80.51 0 137.26-56.74Q445-573.49 445-654q0-17.35-3.5-33.67Q438-704 433-720q-4-11 1.5-19.5T451-748h182q26 0 43 17t17 43v188l84.31-84.31q6.69-6.69 16.19-3.15 9.5 3.54 9.5 13.46v188q0 9.92-9.5 13.46-9.5 3.54-16.19-3.15L693-460v188q0 26-17 43t-43 17H217Zm33.96-348q-5.96 0-9.96-4.03-4-4.02-4-9.97v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM289-334h272q8.5 0 12.75-8t-.75-16l-72.43-96.9Q496-461 489-461t-12 6l-88 109-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-1.75 16t12.75 8Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackAddW100Filled.displayName = 'AmauiIconMaterialVideoCameraBackAddW100Filled';

export default IconMaterialVideoCameraBackAddW100Filled;
