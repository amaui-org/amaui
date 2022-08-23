import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpdateDisabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabledSharpFilled'
      short_name='UpdateDisabled'

      {...props}
    >
      <path d="M19.775 22.625 16.775 19.625Q15.725 20.275 14.525 20.637Q13.325 21 12 21Q10.125 21 8.488 20.288Q6.85 19.575 5.638 18.362Q4.425 17.15 3.712 15.512Q3 13.875 3 12Q3 10.675 3.362 9.475Q3.725 8.275 4.375 7.225L1.375 4.225L2.8 2.8L21.2 21.2ZM12 19Q12.9 19 13.738 18.788Q14.575 18.575 15.325 18.175L5.825 8.675Q5.425 9.425 5.213 10.262Q5 11.1 5 12Q5 14.925 7.038 16.962Q9.075 19 12 19ZM15 10V8H17.75Q16.725 6.6 15.225 5.8Q13.725 5 12 5Q11.1 5 10.263 5.213Q9.425 5.425 8.675 5.825L7.225 4.375Q8.275 3.725 9.475 3.362Q10.675 3 12 3Q14.05 3 15.888 3.875Q17.725 4.75 19 6.35V4H21V10ZM13 10.15 11 8.15V7H13ZM19.625 16.775 18.175 15.325Q18.45 14.775 18.637 14.2Q18.825 13.625 18.9 13H20.95Q20.825 14.05 20.488 15Q20.15 15.95 19.625 16.775Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabledSharpFilled.displayName = 'AmauiIconMaterialUpdateDisabledSharpFilled';

export default IconMaterialUpdateDisabledSharpFilled;
