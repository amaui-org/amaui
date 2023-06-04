import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeaturedPlayListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeaturedPlayListW100'

      short_name='FeaturedPlayList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm2.65-5.65h7.7v-.7h-7.7Zm0-3h7.7v-.7h-7.7ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialFeaturedPlayListW100.displayName = 'AmauiIconMaterialFeaturedPlayListW100';

export default IconMaterialFeaturedPlayListW100;
