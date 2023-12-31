import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComicBubbleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComicBubbleW100'

      short_name='ComicBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-803-83 83H240v117l-83 83 83 83v117h117l83 83 100-100 168 85-86-167 101-101-83-83v-117H523l-83-83Zm0-39 94.323 94.323h133.354v133.354L762-520 656-414l95 185-20 20-185-95-106 106-94.323-94.323H212.323v-133.354L118-520l94.323-94.323v-133.354h133.354L440-842Zm0 322Z"/>
    </Icon>
  );
});

IconMaterialComicBubbleW100.displayName = 'AmauiIconMaterialComicBubbleW100';

export default IconMaterialComicBubbleW100;
