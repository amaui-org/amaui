import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 19.7q-.65 0-1.075-.425Q3.8 18.85 3.8 18.2V5.8q0-.65.425-1.075Q4.65 4.3 5.3 4.3h7.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.3q-.35 0-.575.225Q4.5 5.45 4.5 5.8v12.4q0 .35.225.575Q4.95 19 5.3 19h12.4q.35 0 .575-.225.225-.225.225-.575v-7.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.85q0 .65-.425 1.075-.425.425-1.075.425ZM17.85 8q-.15 0-.25-.1t-.1-.25V6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.2v1.65q0 .15-.1.25t-.25.1Zm-9.6 8.35h6.7q.275 0 .375-.225.1-.225-.05-.425L13.5 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225Zm-3.75-6V19 5v5.35Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100.displayName = 'AmauiIconMaterialAddPhotoAlternateW100';

export default IconMaterialAddPhotoAlternateW100;
