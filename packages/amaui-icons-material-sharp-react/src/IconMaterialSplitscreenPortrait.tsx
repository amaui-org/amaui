import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenPortrait'

      short_name='SplitscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200ZM160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm480-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenPortrait.displayName = 'AmauiIconMaterialSplitscreenPortrait';

export default IconMaterialSplitscreenPortrait;
