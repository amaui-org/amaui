import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseW100'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-188h268v188H172Zm348 0v-348h268v348H520ZM412-332Zm136-160Zm-376 52v-348h268v348H172Zm240-28Zm108-132v-188h268v188H520Zm28-28ZM200-200h212v-132H200v132Zm348 0h212v-292H548v292ZM200-468h212v-292H200v292Zm348-160h212v-132H548v132Z"/>
    </Icon>
  );
});

IconMaterialBrowseW100.displayName = 'AmauiIconMaterialBrowseW100';

export default IconMaterialBrowseW100;
