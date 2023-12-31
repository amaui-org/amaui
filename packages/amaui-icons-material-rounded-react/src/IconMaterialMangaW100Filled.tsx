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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm165-28h411q12 0 22-10t10-22v-380l-120 39-93-30q-9-3-18 0t-15 11l-58 79-92 30q-9 3-15 11t-6 18v98l-57 78q-6 8-6 18t6 18l31 42Z"/>
    </Icon>
  );
});

IconMaterialMangaW100Filled.displayName = 'AmauiIconMaterialMangaW100Filled';

export default IconMaterialMangaW100Filled;
