import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibrary'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V6h7.975v2H4v12h16v-3.975h2V22Zm2-2V8 16.025v-.675Zm13-5.975-1.55-3.475L11.975 9l3.475-1.55L17 4l1.55 3.45L22 9l-3.45 1.55Z"/>
    </Icon>
  );
});

IconMaterialSlideLibrary.displayName = 'AmauiIconMaterialSlideLibrary';

export default IconMaterialSlideLibrary;
