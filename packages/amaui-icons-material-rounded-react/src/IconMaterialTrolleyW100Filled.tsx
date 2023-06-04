import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrolleyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyW100Filled'

      short_name='Trolley'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.65 17H6.8q-.625 0-1.062-.438Q5.3 16.125 5.3 15.5V5.8q0-.35-.225-.575Q4.85 5 4.5 5H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T3 4.3h1.5q.625 0 1.062.437Q6 5.175 6 5.8v9.7q0 .35.225.575.225.225.575.225h13.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6.575 20.55q-.55 0-.925-.375t-.375-.925q0-.55.375-.925t.925-.375q.55 0 .925.375t.375.925q0 .55-.375.925t-.925.375ZM8.75 14.3q-.325 0-.537-.213Q8 13.875 8 13.55v-2.5q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.537-.213.213-.538.213Zm7 0q-.325 0-.537-.213Q15 13.875 15 13.55v-2.5q0-.325.213-.538.212-.212.537-.212h2.5q.325 0 .538.212.212.213.212.538v2.5q0 .325-.212.537-.213.213-.538.213Zm3.925 6.25q-.55 0-.912-.375-.363-.375-.363-.925t.363-.925q.362-.375.912-.375t.938.375q.387.375.387.925t-.387.925q-.388.375-.938.375Z"/>
    </Icon>
  );
});

IconMaterialTrolleyW100Filled.displayName = 'AmauiIconMaterialTrolleyW100Filled';

export default IconMaterialTrolleyW100Filled;
