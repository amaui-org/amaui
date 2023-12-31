import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComicBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComicBubbleW100Filled'

      short_name='ComicBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-842 94.323 94.323h133.354v133.354L762-520 656-414l95 185-20 20-185-95-106 106-94.323-94.323H212.323v-133.354L118-520l94.323-94.323v-133.354h133.354L440-842Z"/>
    </Icon>
  );
});

IconMaterialComicBubbleW100Filled.displayName = 'AmauiIconMaterialComicBubbleW100Filled';

export default IconMaterialComicBubbleW100Filled;
