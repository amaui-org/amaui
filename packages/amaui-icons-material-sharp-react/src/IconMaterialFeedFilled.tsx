import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedFilled'

      short_name='Feed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h13l5 5v13Zm4-4h10v-2H7Zm0-8h5V7H7Zm0 4h10v-2H7Zm8-4h4l-4-4Z"/>
    </Icon>
  );
});

IconMaterialFeedFilled.displayName = 'AmauiIconMaterialFeedFilled';

export default IconMaterialFeedFilled;
