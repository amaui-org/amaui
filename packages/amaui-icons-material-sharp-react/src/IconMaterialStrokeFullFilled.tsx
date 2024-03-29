import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrokeFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrokeFullFilled'

      short_name='StrokeFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M477 976q-83 0-156-31.5T194 859q-54-54-85.5-127T77 576q0-83 31.5-156T194 293q54-54 127-85.5T477 176q83 0 156 31.5T760 293q54 54 85.5 127T877 576q0 83-31.5 156T760 859q-54 54-127 85.5T477 976Zm91-93q78-23 135.5-80.5T784 667L568 883ZM171 482l212-212q-77 23-133 79t-79 133Zm-4 176 392-391q-12-3-24-5t-25-4L159 609q2 13 3.5 25t4.5 24Zm57 114 449-450q-8-6-16.5-12T639 299L200 738q5 9 11 17.5t13 16.5Zm91 81 438-439q-5-9-11-17.5T730 380L281 830q8 6 16.5 12t17.5 11Zm129 41 351-351q-2-13-4-25t-5-24L395 885q12 3 24 5t25 4Z"/>
    </Icon>
  );
});

IconMaterialStrokeFullFilled.displayName = 'AmauiIconMaterialStrokeFullFilled';

export default IconMaterialStrokeFullFilled;
