import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleRounded'
      short_name='Title'

      {...props}
    >
      <path d="M12 20Q11.375 20 10.938 19.562Q10.5 19.125 10.5 18.5V7H6.5Q5.875 7 5.438 6.562Q5 6.125 5 5.5Q5 4.875 5.438 4.438Q5.875 4 6.5 4H17.5Q18.125 4 18.562 4.438Q19 4.875 19 5.5Q19 6.125 18.562 6.562Q18.125 7 17.5 7H13.5V18.5Q13.5 19.125 13.062 19.562Q12.625 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTitleRounded.displayName = 'AmauiIconMaterialTitleRounded';

export default IconMaterialTitleRounded;
