import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindRounded'
      short_name='FastRewind'

      {...props}
    >
      <path d="M19.95 16.975 13.75 12.825Q13.3 12.525 13.3 12Q13.3 11.475 13.75 11.175L19.95 7.025Q20.45 6.675 20.975 6.975Q21.5 7.275 21.5 7.875V16.125Q21.5 16.725 20.975 17.025Q20.45 17.325 19.95 16.975ZM9.95 16.975 3.75 12.825Q3.3 12.525 3.3 12Q3.3 11.475 3.75 11.175L9.95 7.025Q10.45 6.675 10.975 6.975Q11.5 7.275 11.5 7.875V16.125Q11.5 16.725 10.975 17.025Q10.45 17.325 9.95 16.975ZM9.5 12ZM19.5 12ZM9.5 14.25V9.75L6.1 12ZM19.5 14.25V9.75L16.1 12Z"/>
    </Icon>
  );
});

IconMaterialFastRewindRounded.displayName = 'AmauiIconMaterialFastRewindRounded';

export default IconMaterialFastRewindRounded;
