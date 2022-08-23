import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebStoriesRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesRoundedW100Filled'
      short_name='WebStories'

      {...props}
    >
      <path d="M18.15 19.475V4.5Q18.675 4.625 19.013 5.037Q19.35 5.45 19.35 6V17.975Q19.35 18.525 19.013 18.938Q18.675 19.35 18.15 19.475ZM7.25 21Q6.625 21 6.188 20.562Q5.75 20.125 5.75 19.5V4.5Q5.75 3.875 6.188 3.438Q6.625 3 7.25 3H15.95Q16.575 3 17.012 3.438Q17.45 3.875 17.45 4.5V19.5Q17.45 20.125 17.012 20.562Q16.575 21 15.95 21ZM20.05 17.975V6Q20.375 6.125 20.562 6.387Q20.75 6.65 20.75 7V16.975Q20.75 17.325 20.562 17.587Q20.375 17.85 20.05 17.975Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesRoundedW100Filled.displayName = 'AmauiIconMaterialWebStoriesRoundedW100Filled';

export default IconMaterialWebStoriesRoundedW100Filled;
