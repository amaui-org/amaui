import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesRoundedW100'
      short_name='AmpStories'

      {...props}
    >
      <path d="M9.05 18.7Q8.725 18.7 8.512 18.487Q8.3 18.275 8.3 17.95V6.05Q8.3 5.725 8.512 5.512Q8.725 5.3 9.05 5.3H14.95Q15.275 5.3 15.488 5.512Q15.7 5.725 15.7 6.05V17.95Q15.7 18.275 15.488 18.487Q15.275 18.7 14.95 18.7ZM5.1 16.35V7.625Q5.1 7.5 5.2 7.4Q5.3 7.3 5.45 7.3Q5.6 7.3 5.7 7.4Q5.8 7.5 5.8 7.65V16.375Q5.8 16.5 5.7 16.6Q5.6 16.7 5.45 16.7Q5.3 16.7 5.2 16.6Q5.1 16.5 5.1 16.35ZM18.2 16.35V7.625Q18.2 7.5 18.3 7.4Q18.4 7.3 18.55 7.3Q18.7 7.3 18.8 7.4Q18.9 7.5 18.9 7.65V16.375Q18.9 16.5 18.8 16.6Q18.7 16.7 18.55 16.7Q18.4 16.7 18.3 16.6Q18.2 16.5 18.2 16.35ZM9 18H15V6H9ZM9 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesRoundedW100.displayName = 'AmauiIconMaterialAmpStoriesRoundedW100';

export default IconMaterialAmpStoriesRoundedW100;
