import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanZoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanZoomFilled'

      short_name='PanZoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm516-460-56-56 124-124H600v-80h240v240h-80v-104L636-580Z"/>
    </Icon>
  );
});

IconMaterialPanZoomFilled.displayName = 'AmauiIconMaterialPanZoomFilled';

export default IconMaterialPanZoomFilled;
