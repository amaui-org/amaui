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
      <path d="M172-172v-188h268v188H172Zm348 0v-348h268v348H520ZM172-440v-348h268v348H172Zm348-160v-188h268v188H520Z"/>
    </Icon>
  );
});

IconMaterialBrowseW100Filled.displayName = 'AmauiIconMaterialBrowseW100Filled';

export default IconMaterialBrowseW100Filled;
