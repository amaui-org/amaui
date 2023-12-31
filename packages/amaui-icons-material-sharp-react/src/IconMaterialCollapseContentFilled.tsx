import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseContentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseContentFilled'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/>
    </Icon>
  );
});

IconMaterialCollapseContentFilled.displayName = 'AmauiIconMaterialCollapseContentFilled';

export default IconMaterialCollapseContentFilled;
