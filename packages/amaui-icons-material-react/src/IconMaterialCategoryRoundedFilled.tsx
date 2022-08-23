import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategoryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryRoundedFilled'
      short_name='Category'

      {...props}
    >
      <path d="M8.275 11Q7.7 11 7.412 10.488Q7.125 9.975 7.425 9.475L11.15 3.4Q11.45 2.925 12 2.925Q12.55 2.925 12.85 3.4L16.575 9.475Q16.875 9.975 16.587 10.488Q16.3 11 15.725 11ZM17.5 22Q15.625 22 14.312 20.688Q13 19.375 13 17.5Q13 15.625 14.312 14.312Q15.625 13 17.5 13Q19.375 13 20.688 14.312Q22 15.625 22 17.5Q22 19.375 20.688 20.688Q19.375 22 17.5 22ZM4 21.5Q3.575 21.5 3.288 21.212Q3 20.925 3 20.5V14.5Q3 14.075 3.288 13.787Q3.575 13.5 4 13.5H10Q10.425 13.5 10.713 13.787Q11 14.075 11 14.5V20.5Q11 20.925 10.713 21.212Q10.425 21.5 10 21.5Z"/>
    </Icon>
  );
});

IconMaterialCategoryRoundedFilled.displayName = 'AmauiIconMaterialCategoryRoundedFilled';

export default IconMaterialCategoryRoundedFilled;
