import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMultilineChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartRoundedFilled'
      short_name='MultilineChart'

      {...props}
    >
      <path d="M9.475 12.35 4.1 17.725Q3.8 18.025 3.388 18.012Q2.975 18 2.675 17.7Q2.4 17.4 2.388 17Q2.375 16.6 2.675 16.3L8.775 10.2Q9.075 9.9 9.475 9.9Q9.875 9.9 10.175 10.2L13.475 13.5L16.375 10.25Q15.1 8.75 13.375 7.875Q11.65 7 9.575 7Q8.075 7 6.7 7.475Q5.325 7.95 4.175 8.825Q3.8 9.1 3.363 9.087Q2.925 9.075 2.675 8.725Q2.4 8.35 2.488 7.912Q2.575 7.475 2.95 7.2Q4.375 6.15 6.05 5.575Q7.725 5 9.575 5Q12.025 5 14.1 5.987Q16.175 6.975 17.725 8.75L19.85 6.325Q20.15 5.975 20.588 5.987Q21.025 6 21.325 6.275Q21.6 6.55 21.613 6.95Q21.625 7.35 21.35 7.65L18.975 10.35Q19.675 11.45 20.138 12.7Q20.6 13.95 20.825 15.35Q20.9 15.8 20.65 16.15Q20.4 16.5 19.9 16.5Q19.425 16.5 19.175 16.25Q18.925 16 18.8 15.475Q18.6 14.525 18.288 13.637Q17.975 12.75 17.525 11.95L14.275 15.6Q14 15.925 13.562 15.938Q13.125 15.95 12.825 15.65Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartRoundedFilled.displayName = 'AmauiIconMaterialMultilineChartRoundedFilled';

export default IconMaterialMultilineChartRoundedFilled;
