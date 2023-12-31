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
      <path d="M172-440v-288q0-26 17-43t43-17h208v348H172Zm240-28Zm108-320h208q26 0 43 17t17 43.332V-600H520v-188Zm0 616v-348h268v288q0 26-17 43t-43 17H520ZM172-360h268v188H232q-26 0-43-17t-17-43.332V-360Zm240 28Zm136-296Zm0 136Zm-348 24h212v-292H232q-14 0-23 9t-9 23v260Zm348-160h212v-100q0-14-9-23t-23-9H548v132Zm0 136v292h180q14 0 23-9t9-23v-260H548ZM200-332v100q0 14 9 23t23 9h180v-132H200Z"/>
    </Icon>
  );
});

IconMaterialBrowseW100.displayName = 'AmauiIconMaterialBrowseW100';

export default IconMaterialBrowseW100;
