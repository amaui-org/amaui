import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveBackWord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveBackWord'

      short_name='TextSelectMoveBackWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120 296v-80h80v80h-80Zm0 640v-80h80v80h-80Zm160-200L120 576l160-160 56 56-63 64h247v80H273l63 64-56 56Zm400 120h80V296h-80v560Zm-80 80V216h240v720H600Zm80-80h80-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveBackWord.displayName = 'AmauiIconMaterialTextSelectMoveBackWord';

export default IconMaterialTextSelectMoveBackWord;
