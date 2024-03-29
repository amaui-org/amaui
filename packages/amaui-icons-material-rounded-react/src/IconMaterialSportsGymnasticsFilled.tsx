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
      <path d="M6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8Zm6.95 14q-.4 0-.687-.275-.288-.275-.313-.675L11.5 12 8 11H2q-.425 0-.712-.288Q1 10.425 1 10t.288-.713Q1.575 9 2 9h5l6.25-4.475q.325-.225.7-.175.375.05.65.35.275.35.225.763-.05.412-.4.687L11.15 8.5H14l7.15-4.125q.275-.175.613-.1.337.075.612.4.275.3.225.687-.05.388-.375.638L14.5 12l-.45 9.05q-.025.4-.325.675T12.95 22Z"/>
    </Icon>
  );
});

IconMaterialSportsGymnasticsFilled.displayName = 'AmauiIconMaterialSportsGymnasticsFilled';

export default IconMaterialSportsGymnasticsFilled;
