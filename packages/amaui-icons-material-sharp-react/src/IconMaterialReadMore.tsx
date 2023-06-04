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
      <path d="m7.45 17.45-1.4-1.4L9.075 13H2v-2h7.075L6.05 7.95l1.4-1.4L12.9 12ZM13 17v-2h9v2Zm0-8V7h9v2Zm3 4v-2h6v2Z"/>
    </Icon>
  );
});

IconMaterialReadMore.displayName = 'AmauiIconMaterialReadMore';

export default IconMaterialReadMore;
