import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostFilled'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm120-280h480v-80H240v80Zm0 120h480v-60H240v60Z"/>
    </Icon>
  );
});

IconMaterialPostFilled.displayName = 'AmauiIconMaterialPostFilled';

export default IconMaterialPostFilled;
