import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAndGardenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenW100'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-98q-17 20-39.5 33T552-52q-41.558 0-70.779-29.167Q452-110.333 452-152q0-26 13-48.5t33-39.5q-20-18-33-41.5T452-332q0-41 29.221-68.5T552-428q26 0 49 12t39 32q16-20 38-32t48-12q42.39 0 72.195 28Q828-372 828-330q0 26-13.5 48.5T780-242q21 17 34.5 39.5T828-154q0 42.39-29.167 72.195Q769.667-52 728-52q-26 0-49-12.5T640-98Zm134-111-36-32 40-34q11-9 16.5-22.5T800-326q0-31-21.5-52.5T726-400q-15.898 0-29.312 5.5-13.414 5.5-22.357 16.5l-34.777 40-33.783-40q-8.943-11-22.357-16.5T553.82-400q-30.337 0-52.078 22Q480-356 480-324q0 14 6.5 28t19.5 25l36 30-40 34q-11 9-16.5 22.5T480-156q0 32 21.667 54 21.666 22 51.899 22 15.116 0 29.729-7 14.612-7 26.705-21l29.744-34 34.7 40q8.923 11 22.308 16.5T726-80q31 0 52.5-22t21.5-54q0-14-6.5-28T774-209Zm-134 9q17 0 28.5-11.5T680-240q0-17-11.5-28.5T640-280q-17 0-28.5 11.5T600-240q0 17 11.5 28.5T640-200Zm-428-12v-350h-92l360-292 360 292h-92v42h-28v-102L480-818 240-622v382h120v28H212Zm428-28Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100.displayName = 'AmauiIconMaterialHomeAndGardenW100';

export default IconMaterialHomeAndGardenW100;
