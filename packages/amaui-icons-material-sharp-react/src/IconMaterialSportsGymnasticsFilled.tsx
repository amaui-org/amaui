import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGymnasticsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGymnasticsFilled'

      short_name='SportsGymnastics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8Zm6 14-.5-10L8 11H1V9h6l7-5 1.3 1.525L11.15 8.5H14L21.8 4 23 5.4 14.5 12 14 22Z"/>
    </Icon>
  );
});

IconMaterialSportsGymnasticsFilled.displayName = 'AmauiIconMaterialSportsGymnasticsFilled';

export default IconMaterialSportsGymnasticsFilled;
