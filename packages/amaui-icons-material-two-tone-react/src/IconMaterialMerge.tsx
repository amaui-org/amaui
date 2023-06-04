import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Merge'

      short_name='Merge'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M6.41,21L5,19.59l4.83-4.83c0.75-0.75,1.17-1.77,1.17-2.83v-5.1L9.41,8.41L8,7l4-4l4,4l-1.41,1.41L13,6.83v5.1 c0,1.06,0.42,2.08,1.17,2.83L19,19.59L17.59,21L12,15.41L6.41,21z"/></g>
    </Icon>
  );
});

IconMaterialMerge.displayName = 'AmauiIconMaterialMerge';

export default IconMaterialMerge;
