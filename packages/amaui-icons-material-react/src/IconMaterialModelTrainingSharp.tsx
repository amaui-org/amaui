import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModelTrainingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelTrainingSharp'
      short_name='ModelTraining'

      {...props}
    >
      <path d="M11 18.5Q11 17.925 10.613 17.363Q10.225 16.8 9.75 16.188Q9.275 15.575 8.887 14.912Q8.5 14.25 8.5 13.5Q8.5 12.05 9.525 11.025Q10.55 10 12 10Q13.45 10 14.475 11.025Q15.5 12.05 15.5 13.5Q15.5 14.25 15.113 14.912Q14.725 15.575 14.25 16.188Q13.775 16.8 13.387 17.363Q13 17.925 13 18.5ZM11 21V19.5H13V21ZM18.85 18.85 17.425 17.425Q18.175 16.525 18.587 15.4Q19 14.275 19 13Q19 11.35 18.312 9.938Q17.625 8.525 16.425 7.575L17.85 6.15Q19.3 7.4 20.15 9.162Q21 10.925 21 13Q21 14.675 20.438 16.162Q19.875 17.65 18.85 18.85ZM5.15 18.85Q4.125 17.65 3.562 16.162Q3 14.675 3 13Q3 9.25 5.625 6.625Q8.25 4 12 4Q12.05 4 12.1 4Q12.15 4 12.2 4L10.6 2.4L12 1L16 5L12 9L10.575 7.575L12.15 6Q12.1 6 12.075 6Q12.05 6 12 6Q9.1 6 7.05 8.05Q5 10.1 5 13Q5 14.275 5.412 15.4Q5.825 16.525 6.575 17.425Z"/>
    </Icon>
  );
});

IconMaterialModelTrainingSharp.displayName = 'AmauiIconMaterialModelTrainingSharp';

export default IconMaterialModelTrainingSharp;
