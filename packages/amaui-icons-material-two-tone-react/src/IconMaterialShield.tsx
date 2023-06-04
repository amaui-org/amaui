import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShield = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shield'

      short_name='Shield'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M6,6.39v4.7c0,4,2.55,7.7,6,8.83c3.45-1.13,6-4.82,6-8.83v-4.7l-6-2.25L6,6.39 z" enableBackground="new" opacity=".3"/><path d="M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"/></g></g>
    </Icon>
  );
});

IconMaterialShield.displayName = 'AmauiIconMaterialShield';

export default IconMaterialShield;
