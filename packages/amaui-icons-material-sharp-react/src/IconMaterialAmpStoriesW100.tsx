import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmpStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesW100'

      short_name='AmpStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 18.7V5.3h7.4v13.4Zm-3.2-2V7.3h.7v9.4Zm13.1 0V7.3h.7v9.4ZM9 18h6V6H9Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesW100.displayName = 'AmauiIconMaterialAmpStoriesW100';

export default IconMaterialAmpStoriesW100;
