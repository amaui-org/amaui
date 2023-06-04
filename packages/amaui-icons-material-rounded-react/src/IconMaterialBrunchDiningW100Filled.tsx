import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrunchDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningW100Filled'

      short_name='BrunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 21q-.3 0-.5-.2t-.25-.5h14q-.05.3-.25.5t-.5.2Zm-.75-3.2q.05-.3.25-.5t.5-.2H7.4v-.15q0-.325.213-.537.212-.213.537-.213h2.5q.325 0 .538.213.212.212.212.537v.15h4.25q.3 0 .5.2t.25.5ZM20.15 21q-.325 0-.537-.212-.213-.213-.213-.538v-5.5q-.65-.525-1.125-1.387-.475-.863-.475-1.913v-7.1q0-.325.213-.538.212-.212.537-.212h2.3q.325 0 .538.212.212.213.212.538v7.1q0 1.05-.425 1.913-.425.862-1.075 1.387v5.55h1.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM18.5 8.8h2.4V4.3h-2.4Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningW100Filled.displayName = 'AmauiIconMaterialBrunchDiningW100Filled';

export default IconMaterialBrunchDiningW100Filled;
