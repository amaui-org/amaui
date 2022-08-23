import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleTwoTone'
      short_name='Article'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/><path d="M5,5v14h14V5H5z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M17,13H7v-2h10 V13z M17,9H7V7h10V9z M14,17H7v-2h7V17z"/></g>
    </Icon>
  );
});

IconMaterialArticleTwoTone.displayName = 'AmauiIconMaterialArticleTwoTone';

export default IconMaterialArticleTwoTone;
