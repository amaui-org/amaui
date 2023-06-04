import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpFilled'

      short_name='ThumbUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21V8l7-7 1.85 1.85L15.55 8H23v4.4L19.35 21ZM6 8v13H2V8Z"/>
    </Icon>
  );
});

IconMaterialThumbUpFilled.displayName = 'AmauiIconMaterialThumbUpFilled';

export default IconMaterialThumbUpFilled;
