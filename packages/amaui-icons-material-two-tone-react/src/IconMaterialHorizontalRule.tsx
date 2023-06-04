import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRule'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" fillRule="evenodd" height="24" width="24"/><g><rect fillRule="evenodd" height="2" width="16" x="4" y="11"/></g></g>
    </Icon>
  );
});

IconMaterialHorizontalRule.displayName = 'AmauiIconMaterialHorizontalRule';

export default IconMaterialHorizontalRule;
