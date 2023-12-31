import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPen'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m490-527 37 37 217-217-37-37-217 217ZM200-200h37l233-233-37-37-233 233v37Zm355-205L405-555l167-167-29-29-219 219-56-56 275-275 85 85 79-79 150 150-302 302ZM270-120H120v-150l285-285 150 150-285 285Z"/>
    </Icon>
  );
});

IconMaterialInkPen.displayName = 'AmauiIconMaterialInkPen';

export default IconMaterialInkPen;
