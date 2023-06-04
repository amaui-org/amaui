import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100Filled'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.85 8q-.15 0-.25-.1t-.1-.25V6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.2v1.65q0 .15-.1.25t-.25.1Zm-9.6 8.35h6.7q.275 0 .375-.225.1-.225-.05-.425L13.5 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM5.3 19.7q-.65 0-1.075-.425Q3.8 18.85 3.8 18.2V5.8q0-.65.425-1.075Q4.65 4.3 5.3 4.3h7.85v3.35q0 .125.112.237.113.113.238.113h2v2q0 .125.113.238.112.112.237.112h3.35v7.85q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100Filled.displayName = 'AmauiIconMaterialAddPhotoAlternateW100Filled';

export default IconMaterialAddPhotoAlternateW100Filled;
