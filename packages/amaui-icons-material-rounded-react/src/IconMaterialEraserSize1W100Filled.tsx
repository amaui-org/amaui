import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize1W100Filled'

      short_name='EraserSize1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M302-252q-20 0-35-15t-15-35q0-10 3.5-18.5T267-337l356-356q8-8 17-11.5t19-3.5q20 0 34.5 14.5T708-658q0 10-3.5 18.5T694-623L337-267q-7 8-16 11.5t-19 3.5Z"/>
    </Icon>
  );
});

IconMaterialEraserSize1W100Filled.displayName = 'AmauiIconMaterialEraserSize1W100Filled';

export default IconMaterialEraserSize1W100Filled;
