import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMore'

      short_name='ReadMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="9" x="13" y="7"/><rect height="2" width="9" x="13" y="15"/><rect height="2" width="6" x="16" y="11"/><polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17"/></g></g>
    </Icon>
  );
});

IconMaterialReadMore.displayName = 'AmauiIconMaterialReadMore';

export default IconMaterialReadMore;
