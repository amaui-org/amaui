import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMangaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MangaW100'

      short_name='Manga'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm225-28-44-60 69.942-96.434v-119.395l113.196-36.737L567-649l113 36 120-39v-68H160v480h197Zm54-256Zm-20 256h377q12 0 22-10t10-22v-321l-17-24-103 34-102-34-64.146 87.697L411-496v108l-64 88 44 60Z"/>
    </Icon>
  );
});

IconMaterialMangaW100.displayName = 'AmauiIconMaterialMangaW100';

export default IconMaterialMangaW100;
