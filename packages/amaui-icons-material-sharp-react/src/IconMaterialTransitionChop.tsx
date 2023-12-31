import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionChop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionChop'

      short_name='TransitionChop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-138 462-120-78-302H160v422Zm95 58h545v-480H627l93 360-465 120Zm-95-480Z"/>
    </Icon>
  );
});

IconMaterialTransitionChop.displayName = 'AmauiIconMaterialTransitionChop';

export default IconMaterialTransitionChop;
