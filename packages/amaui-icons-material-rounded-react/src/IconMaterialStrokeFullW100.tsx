import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrokeFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrokeFullW100'

      short_name='StrokeFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M477 924q-72 0-135.5-27.5T231 822q-47-47-74.5-110.5T129 576q0-72 27.5-135.5T231 330q47-47 110.5-74.5T477 228q72 0 135.5 27.5T723 330q47 47 74.5 110.5T825 576q0 72-27.5 135.5T723 822q-47 47-110.5 74.5T477 924Zm44-31q107-14 183-90t90-183L521 893ZM160 529l270-270q-106 15-180.5 89.5T160 529Zm16 157 411-411q-26-10-54.5-14.5T475 256L157 574q0 29 5 57.5t14 54.5Zm65 106 452-453q-17-16-37-28.5T614 287L188 713q11 22 24 42t29 37Zm99 73 426-427q-11-22-24-41.5T713 360L261 813q17 16 37 28.5t42 23.5Zm139 31 318-318q0-29-4.5-57.5T778 466L367 877q26 10 54.5 14.5T479 896Z"/>
    </Icon>
  );
});

IconMaterialStrokeFullW100.displayName = 'AmauiIconMaterialStrokeFullW100';

export default IconMaterialStrokeFullW100;
