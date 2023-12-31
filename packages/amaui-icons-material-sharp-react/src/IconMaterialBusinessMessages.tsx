import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessMessages = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessMessages'

      short_name='BusinessMessages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-450L40-800h840v640H200Zm80-560v480h520v-480H280Zm260 460 56-56-44-44h168v-80H360l180 180ZM360-520h360L540-700l-56 56 44 44H360v80Zm-80-200v480-480Z"/>
    </Icon>
  );
});

IconMaterialBusinessMessages.displayName = 'AmauiIconMaterialBusinessMessages';

export default IconMaterialBusinessMessages;
