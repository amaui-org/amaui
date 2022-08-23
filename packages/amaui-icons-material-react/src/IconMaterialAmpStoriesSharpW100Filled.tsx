import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesSharpW100Filled'
      short_name='AmpStories'

      {...props}
    >
      <path d="M8.3 18.7V5.3H15.7V18.7ZM5.1 16.7V7.3H5.8V16.7ZM18.2 16.7V7.3H18.9V16.7Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesSharpW100Filled.displayName = 'AmauiIconMaterialAmpStoriesSharpW100Filled';

export default IconMaterialAmpStoriesSharpW100Filled;
