import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkOutlinedW700'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7.3 17.5 12 15.5 16.7 17.5V5.3Q16.7 5.3 16.7 5.3Q16.7 5.3 16.7 5.3H7.3Q7.3 5.3 7.3 5.3Q7.3 5.3 7.3 5.3ZM4.15 22.275V5.3Q4.15 3.975 5.062 3.062Q5.975 2.15 7.3 2.15H16.7Q18.025 2.15 18.938 3.062Q19.85 3.975 19.85 5.3V22.275L12 18.925ZM16.7 5.3H12H7.3Q7.3 5.3 7.3 5.3Q7.3 5.3 7.3 5.3H16.7Q16.7 5.3 16.7 5.3Q16.7 5.3 16.7 5.3Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkOutlinedW700;
