import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateAutoW100Filled'

      short_name='RotateAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q552.21-132 480-132q-70 0-131.5-25.5T240-228q-47-45-76-105.5T132-464q0-7 4-10.5t9-3.5q5 0 10 3t5 11q6 129 98.5 217T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-100 0-178.5 53.5T186-606h102q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H162.35q-13.35 0-21.85-8.63-8.5-8.62-8.5-21.37v-126q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v117q40-94 125.5-152.5T480-828q72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q828-552.35 828-480.17ZM332-320h30l26-65q8-20 32.75-31.5T509-428q20.97 0 38.98 11.5Q566-405 574-385l22 56q2.36 5.11 5.64 7.05Q604.93-320 610-320h.32q7.68 0 12-5.95 4.31-5.94 1.68-14.05L490-676q-1-2-3.65-3t-8.47-1q-1.88 0-3.38 1t-2.5 3L332-320Zm84-134 62-164h4l64 164H416Z"/>
    </Icon>
  );
});

IconMaterialRotateAutoW100Filled.displayName = 'AmauiIconMaterialRotateAutoW100Filled';

export default IconMaterialRotateAutoW100Filled;
