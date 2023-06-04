import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffFilled'

      short_name='ThumbUpOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21V8l7-7 1.85 1.85L15.55 8H23v4.4L19.35 21ZM6 8v13H2V8Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffFilled.displayName = 'AmauiIconMaterialThumbUpOffFilled';

export default IconMaterialThumbUpOffFilled;
