import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitionPushFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitionPushFilled'

      short_name='TransitionPush'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-160v-79h80v-481h-80v-80h160v640H320Zm240 0v-640h360v640H560ZM200-320l-57-56 63-64H40v-80h166l-63-63 57-57 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialTransitionPushFilled.displayName = 'AmauiIconMaterialTransitionPushFilled';

export default IconMaterialTransitionPushFilled;
