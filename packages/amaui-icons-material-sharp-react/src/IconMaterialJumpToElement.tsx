import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJumpToElement = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JumpToElement'

      short_name='JumpToElement'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 616V456h80v80h80v80H440Zm280 0v-80h80v-80h80v160H720ZM440 336V176h160v80h-80v80h-80Zm360 0v-80h-80v-80h160v160h-80ZM136 976l-56-56 224-224H120v-80h320v320h-80V752L136 976Z"/>
    </Icon>
  );
});

IconMaterialJumpToElement.displayName = 'AmauiIconMaterialJumpToElement';

export default IconMaterialJumpToElement;
