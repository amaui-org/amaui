import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarW100'

      short_name='LocalBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 20.35q-.15 0-.25-.1T7.3 20q0-.15.1-.25t.25-.1h4v-6.9L4.9 5.15q-.05-.05-.1-.163-.05-.112-.05-.212 0-.2.138-.338.137-.137.337-.137h13.55q.2 0 .338.15.137.15.137.35 0 .1-.05.2t-.1.15l-6.75 7.6v6.9h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.45 7h9.1l1.8-2H5.65ZM12 12.1l3.925-4.4h-7.85Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBarW100.displayName = 'AmauiIconMaterialLocalBarW100';

export default IconMaterialLocalBarW100;
