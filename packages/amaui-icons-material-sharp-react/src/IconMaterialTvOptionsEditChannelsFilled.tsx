import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOptionsEditChannelsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOptionsEditChannelsFilled'

      short_name='TvOptionsEditChannels'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M60-320v-80h80v80H60Zm0-160v-80h80v80H60Zm0-160v-80h80v80H60Zm160 320v-80h160v80H220Zm0-160v-80h520v80H220Zm0-160v-80h520v80H220Zm398 480L448-330l56-56 114 112 226-226 56 58-282 282Z"/>
    </Icon>
  );
});

IconMaterialTvOptionsEditChannelsFilled.displayName = 'AmauiIconMaterialTvOptionsEditChannelsFilled';

export default IconMaterialTvOptionsEditChannelsFilled;
