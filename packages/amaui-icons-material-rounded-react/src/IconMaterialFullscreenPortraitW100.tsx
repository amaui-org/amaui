import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenPortraitW100'

      short_name='FullscreenPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M370-260h220q13 0 21.5-8.5T620-290v-380q0-13-8.5-21.5T590-700H370q-13 0-21.5 8.5T340-670v380q0 13 8.5 21.5T370-260Zm378 68q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Zm-28 0v-576q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22Zm0-608H240h480Z"/>
    </Icon>
  );
});

IconMaterialFullscreenPortraitW100.displayName = 'AmauiIconMaterialFullscreenPortraitW100';

export default IconMaterialFullscreenPortraitW100;
