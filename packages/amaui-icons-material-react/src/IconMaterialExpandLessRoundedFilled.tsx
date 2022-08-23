import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandLessRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessRoundedFilled'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M6.7 14.675Q6.425 14.4 6.425 13.975Q6.425 13.55 6.7 13.275L11.3 8.675Q11.45 8.525 11.625 8.462Q11.8 8.4 12 8.4Q12.2 8.4 12.375 8.462Q12.55 8.525 12.7 8.675L17.325 13.3Q17.6 13.575 17.6 13.975Q17.6 14.375 17.3 14.675Q17.025 14.95 16.6 14.95Q16.175 14.95 15.9 14.675L12 10.775L8.075 14.7Q7.8 14.975 7.4 14.975Q7 14.975 6.7 14.675Z"/>
    </Icon>
  );
});

IconMaterialExpandLessRoundedFilled.displayName = 'AmauiIconMaterialExpandLessRoundedFilled';

export default IconMaterialExpandLessRoundedFilled;
