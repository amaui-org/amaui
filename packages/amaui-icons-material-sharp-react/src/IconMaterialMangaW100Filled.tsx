import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMangaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MangaW100Filled'

      short_name='Manga'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm225-28h411q12 0 22-10t10-22v-380l-120 39-113-36-70.862 96.434-113.196 36.737v119.395L313-300l44 60Z"/>
    </Icon>
  );
});

IconMaterialMangaW100Filled.displayName = 'AmauiIconMaterialMangaW100Filled';

export default IconMaterialMangaW100Filled;
