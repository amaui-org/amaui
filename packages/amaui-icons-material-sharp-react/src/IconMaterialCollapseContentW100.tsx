import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseContentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseContentW100'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v188h-28v-160H252v-28h188Zm108-268v160h160v28H520v-188h28Z"/>
    </Icon>
  );
});

IconMaterialCollapseContentW100.displayName = 'AmauiIconMaterialCollapseContentW100';

export default IconMaterialCollapseContentW100;
