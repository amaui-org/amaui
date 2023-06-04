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
      <path d="M8.3 18.7V5.3h7.4v13.4Zm-3.2-2V7.3h.7v9.4Zm13.1 0V7.3h.7v9.4Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesW100Filled.displayName = 'AmauiIconMaterialAmpStoriesW100Filled';

export default IconMaterialAmpStoriesW100Filled;
