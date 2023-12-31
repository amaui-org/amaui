import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollapseAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollapseAll'

      short_name='CollapseAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-264 324-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l155-155q23-23 57-23t57 23l155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-264Zm0-432 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L537-641q-23 23-57 23t-57-23L268-796q-11-11-11-28t11-28q11-11 28-11t28 11l156 156Z"/>
    </Icon>
  );
});

IconMaterialCollapseAll.displayName = 'AmauiIconMaterialCollapseAll';

export default IconMaterialCollapseAll;
