import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeFilled'

      short_name='Merge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 21 5 19.6l4.825-4.85q.575-.575.875-1.3.3-.725.3-1.525v-5.1L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.825v5.1q0 .8.3 1.525.3.725.875 1.3L19 19.6 17.6 21 12 15.4Z"/>
    </Icon>
  );
});

IconMaterialMergeFilled.displayName = 'AmauiIconMaterialMergeFilled';

export default IconMaterialMergeFilled;
