import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReadMoreTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreTwoTone'
      short_name='ReadMore'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" width="9" x="13" y="7"/><rect height="2" width="9" x="13" y="15"/><rect height="2" width="6" x="16" y="11"/><polygon points="13,12 8,7 8,11 2,11 2,13 8,13 8,17"/></g></g>
    </Icon>
  );
});

export default IconMaterialReadMoreTwoTone;
