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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm165-28-31-42q-6-8-6-18t6-18l57-78.33V-494q0-9.941 6-17.971Q395-520 404-523l92.308-29.903L554-632q6-8 15-11t18 0l93 30 120-39v-36q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h165Zm34 0h377q12 0 22-10t10-22v-321l-17-24-103 34-102-34-64.146 87.697L411-496v108l-64 88 44 60Zm20-256Z"/>
    </Icon>
  );
});

IconMaterialMangaW100.displayName = 'AmauiIconMaterialMangaW100';

export default IconMaterialMangaW100;
