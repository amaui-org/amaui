import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupSharpFilled'
      short_name='Group'

      {...props}
    >
      <path d="M1 20V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q10.65 13 12.25 13.387Q13.85 13.775 15.4 14.55Q16.125 14.925 16.562 15.637Q17 16.35 17 17.2V20ZM9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 9.65 11.825 10.825Q10.65 12 9 12ZM19 8Q19 9.65 17.825 10.825Q16.65 12 15 12Q14.725 12 14.3 11.938Q13.875 11.875 13.6 11.8Q14.275 11 14.637 10.025Q15 9.05 15 8Q15 6.95 14.637 5.975Q14.275 5 13.6 4.2Q13.95 4.075 14.3 4.037Q14.65 4 15 4Q16.65 4 17.825 5.175Q19 6.35 19 8ZM19 20V17Q19 15.9 18.388 14.887Q17.775 13.875 16.65 13.15Q17.925 13.3 19.05 13.662Q20.175 14.025 21.15 14.55Q22.05 15.05 22.525 15.662Q23 16.275 23 17V20Z"/>
    </Icon>
  );
});

IconMaterialGroupSharpFilled.displayName = 'AmauiIconMaterialGroupSharpFilled';

export default IconMaterialGroupSharpFilled;
