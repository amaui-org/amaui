import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMangaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MangaFilled'

      short_name='Manga'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm244-80h476v-439l-120 39-123-40-77 105-123 40v130l-76 105 43 60Z"/>
    </Icon>
  );
});

IconMaterialMangaFilled.displayName = 'AmauiIconMaterialMangaFilled';

export default IconMaterialMangaFilled;
