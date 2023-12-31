import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseW100Filled'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-440v-288q0-26 17-43t43-17h208v348H172Zm348-348h208q26 0 43 17t17 43.332V-600H520v-188Zm0 616v-348h268v288q0 26-17 43t-43 17H520ZM172-360h268v188H232q-26 0-43-17t-17-43.332V-360Z"/>
    </Icon>
  );
});

IconMaterialBrowseW100Filled.displayName = 'AmauiIconMaterialBrowseW100Filled';

export default IconMaterialBrowseW100Filled;
