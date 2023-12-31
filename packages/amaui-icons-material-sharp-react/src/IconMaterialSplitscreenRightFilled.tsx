import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRightFilled'

      short_name='SplitscreenRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120v-720h320v720H520Zm-400 0v-720h320v720H120Zm80-640v560h160v-560H200Zm160 0v560H200v-560h160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRightFilled.displayName = 'AmauiIconMaterialSplitscreenRightFilled';

export default IconMaterialSplitscreenRightFilled;
