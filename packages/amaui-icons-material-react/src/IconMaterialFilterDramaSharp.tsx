import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterDramaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaSharp'
      short_name='FilterDrama'

      {...props}
    >
      <path d="M6.5 20Q4.2 20 2.6 18.4Q1 16.8 1 14.5Q1 12.55 2.213 11.062Q3.425 9.575 5.25 9.15Q5.875 6.9 7.725 5.45Q9.575 4 12 4Q14.975 4 16.988 6.062Q19 8.125 19 11Q20.875 11.2 21.938 12.55Q23 13.9 23 15.475Q23 17.35 21.688 18.675Q20.375 20 18.5 20ZM6.5 18H18.5Q19.55 18 20.275 17.275Q21 16.55 21 15.5Q21 14.45 20.275 13.725Q19.55 13 18.5 13H17V11Q17 8.925 15.538 7.462Q14.075 6 12 6Q10.425 6 9.2 6.862Q7.975 7.725 7.4 9.075Q9.35 9.4 10.675 10.912Q12 12.425 12 14.5H10Q10 13.05 8.975 12.025Q7.95 11 6.5 11Q5.05 11 4.025 12.025Q3 13.05 3 14.5Q3 15.95 4.025 16.975Q5.05 18 6.5 18Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaSharp.displayName = 'AmauiIconMaterialFilterDramaSharp';

export default IconMaterialFilterDramaSharp;
