import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageSharp'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 19 16.15V5H7.85L5.85 3H21ZM19.8 22.6 18.2 21H3V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM6 17 9 13 11.25 16 12.075 14.9 5 7.825V19H16.175L14.175 17ZM12 12ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialHideImageSharp.displayName = 'AmauiIconMaterialHideImageSharp';

export default IconMaterialHideImageSharp;
