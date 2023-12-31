import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPenFilled'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M611-461 461-612l111-110-29-29-219 219-56-56 275-275 85 85 79-79 150 150-246 246ZM270-120H120v-150l284-285 151 150-285 285Z"/>
    </Icon>
  );
});

IconMaterialInkPenFilled.displayName = 'AmauiIconMaterialInkPenFilled';

export default IconMaterialInkPenFilled;
