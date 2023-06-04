import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmpStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesW100Filled'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 18.7q-.325 0-.538-.213-.212-.212-.212-.537V6.05q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v11.9q0 .325-.212.537-.213.213-.538.213ZM5.1 16.35V7.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v8.725q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25Zm13.1 0V7.625q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25v8.725q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesW100Filled.displayName = 'AmauiIconMaterialAmpStoriesW100Filled';

export default IconMaterialAmpStoriesW100Filled;
