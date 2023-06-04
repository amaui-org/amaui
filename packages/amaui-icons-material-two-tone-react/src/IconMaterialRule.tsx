import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rule'

      short_name='Rule'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M16.54,11L13,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,11z M11,7H2v2h9V7z M21,13.41L19.59,12L17,14.59 L14.41,12L13,13.41L15.59,16L13,18.59L14.41,20L17,17.41L19.59,20L21,18.59L18.41,16L21,13.41z M11,15H2v2h9V15z"/></g>
    </Icon>
  );
});

IconMaterialRule.displayName = 'AmauiIconMaterialRule';

export default IconMaterialRule;
