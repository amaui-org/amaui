import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseContent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseContent'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/>
    </Icon>
  );
});

IconMaterialCollapseContent.displayName = 'AmauiIconMaterialCollapseContent';

export default IconMaterialCollapseContent;
