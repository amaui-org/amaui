import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontLoaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderW100Filled'

      short_name='FrontLoader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 19.1q-.975 0-1.662-.687-.688-.688-.688-1.663v-6.7H9.05V5.075h3.775l2.35 2.35v4.225h1.4V9.675L18.25 8l3.575 6.75h-5.25v-2.4h-1.4v2.375q.55.325.863.85.312.525.312 1.175 0 .975-.687 1.663-.688.687-1.663.687-.875 0-1.537-.55-.663-.55-.788-1.425H6.95q-.125.875-.788 1.425-.662.55-1.537.55Zm0-.7q.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163Q5.3 15.1 4.625 15.1t-1.162.487q-.488.488-.488 1.163t.488 1.163q.487.487 1.162.487Zm9.375 0q.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163Q14.675 15.1 14 15.1t-1.162.487q-.488.488-.488 1.163t.488 1.163q.487.487 1.162.487Zm6.675-4.35-2.6-4.9-.8.85v4.05ZM9.75 11.65h4.725V7.725l-1.95-1.95H9.75Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderW100Filled.displayName = 'AmauiIconMaterialFrontLoaderW100Filled';

export default IconMaterialFrontLoaderW100Filled;
