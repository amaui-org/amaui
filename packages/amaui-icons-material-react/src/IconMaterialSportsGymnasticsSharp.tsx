import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsGymnasticsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGymnasticsSharp'
      short_name='SportsGymnastics'

      {...props}
    >
      <path d="M6 8Q5.175 8 4.588 7.412Q4 6.825 4 6Q4 5.175 4.588 4.588Q5.175 4 6 4Q6.825 4 7.412 4.588Q8 5.175 8 6Q8 6.825 7.412 7.412Q6.825 8 6 8ZM12 22 11.5 12 8 11H1V9H7L14 4L15.3 5.525L11.15 8.5H14L21.8 4L23 5.4L14.5 12L14 22Z"/>
    </Icon>
  );
});

IconMaterialSportsGymnasticsSharp.displayName = 'AmauiIconMaterialSportsGymnasticsSharp';

export default IconMaterialSportsGymnasticsSharp;
