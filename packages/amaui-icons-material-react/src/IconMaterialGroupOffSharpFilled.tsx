import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupOffSharpFilled'
      short_name='GroupOff'

      {...props}
    >
      <path d="M20.475 23.3 17 19.825V20H1V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q9.3 13 9.613 13.012Q9.925 13.025 10.225 13.05L9.175 12Q9.125 12 9.088 12Q9.05 12 9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 7.95 5 7.912Q5 7.875 5 7.825L0.675 3.5L2.1 2.075L21.9 21.875ZM16.65 13.15Q17.925 13.3 19.05 13.662Q20.175 14.025 21.15 14.55Q22.05 15.05 22.525 15.662Q23 16.275 23 17V20H22.875L18.875 16Q18.65 15.175 18.088 14.438Q17.525 13.7 16.65 13.15ZM14.05 11.175Q14.525 10.475 14.762 9.675Q15 8.875 15 8Q15 6.95 14.637 5.975Q14.275 5 13.6 4.2Q13.95 4.075 14.3 4.037Q14.65 4 15 4Q16.65 4 17.825 5.175Q19 6.35 19 8Q19 9.65 17.763 10.825Q16.525 12 14.875 12ZM12.6 9.725 7.275 4.4Q7.675 4.2 8.1 4.1Q8.525 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 8.475 12.9 8.9Q12.8 9.325 12.6 9.725Z"/>
    </Icon>
  );
});

IconMaterialGroupOffSharpFilled.displayName = 'AmauiIconMaterialGroupOffSharpFilled';

export default IconMaterialGroupOffSharpFilled;
