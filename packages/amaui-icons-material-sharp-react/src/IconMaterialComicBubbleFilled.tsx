import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComicBubbleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComicBubbleFilled'

      short_name='ComicBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-916 116 116h164v164l116 116-116 116 115 226-53 53-226-115-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Z"/>
    </Icon>
  );
});

IconMaterialComicBubbleFilled.displayName = 'AmauiIconMaterialComicBubbleFilled';

export default IconMaterialComicBubbleFilled;
