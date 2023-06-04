import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUp'

      short_name='ThumbUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21V8l7-7 1.85 1.85L14.55 8H23v4.4L19.35 21Zm2-2h9l3-7v-2h-9l1.35-5.5L9 8.85ZM9 8.85V19ZM7 8v2H4v9h3v2H2V8Z"/>
    </Icon>
  );
});

IconMaterialThumbUp.displayName = 'AmauiIconMaterialThumbUp';

export default IconMaterialThumbUp;
