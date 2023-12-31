import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionPushW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionPushW100Filled'

      short_name='TransitionPush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-212v-27h85v-481h-85v-28h113v536H354Zm213 0v-536h301v536H567ZM237-366l-20-20 83-80H92v-28h208l-83-79 19-20 118 113-117 114Z"/>
    </Icon>
  );
});

IconMaterialTransitionPushW100Filled.displayName = 'AmauiIconMaterialTransitionPushW100Filled';

export default IconMaterialTransitionPushW100Filled;
