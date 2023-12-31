import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvGuideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGuideW100'

      short_name='TvGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Zm170-170h28v-192h92l70 192h32l82-220h-30l-68 183-66-183H274v28h96v192Z"/>
    </Icon>
  );
});

IconMaterialTvGuideW100.displayName = 'AmauiIconMaterialTvGuideW100';

export default IconMaterialTvGuideW100;
