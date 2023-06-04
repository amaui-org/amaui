import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetW100'

      short_name='VideogameAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 16.7q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h14.4q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V8.8q0-.3-.25-.55Q19.5 8 19.2 8H4.8q-.3 0-.55.25Q4 8.5 4 8.8v6.4q0 .3.25.55.25.25.55.25ZM8 14.35q.15 0 .25-.1t.1-.25v-1.65H10q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8.35V10q0-.15-.1-.25T8 9.65q-.15 0-.25.1t-.1.25v1.65H6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V14q0 .15.1.25t.25.1Zm6.5 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3-3q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM4 16V8v8Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetW100.displayName = 'AmauiIconMaterialVideogameAssetW100';

export default IconMaterialVideogameAssetW100;
