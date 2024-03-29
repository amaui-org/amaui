import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFavoriteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteFilled'

      short_name='Favorite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.65 19.8-1.725-1.575q-2.65-2.425-4.787-4.813Q2 11.025 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.325 0 2.5.562 1.175.563 2 1.538.825-.975 2-1.538 1.175-.562 2.5-.562 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 2.875-2.125 5.275-2.125 2.4-4.825 4.825l-1.7 1.55q-.575.525-1.35.525-.775 0-1.35-.525Z"/>
    </Icon>
  );
});

IconMaterialFavoriteFilled.displayName = 'AmauiIconMaterialFavoriteFilled';

export default IconMaterialFavoriteFilled;
