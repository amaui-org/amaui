import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrainSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainSharpW100Filled'
      short_name='Train'

      {...props}
    >
      <path d="M5.3 15V6Q5.3 5.125 5.825 4.587Q6.35 4.05 7.263 3.762Q8.175 3.475 9.4 3.387Q10.625 3.3 12 3.3Q13.4 3.3 14.613 3.387Q15.825 3.475 16.738 3.762Q17.65 4.05 18.175 4.587Q18.7 5.125 18.7 6V15Q18.7 16.125 17.913 16.913Q17.125 17.7 16 17.7L17.5 19.2V19.7H17L15 17.7H9L7 19.7H6.5V19.2L8 17.7Q6.875 17.7 6.088 16.913Q5.3 16.125 5.3 15ZM6 11.3H11.65V6.4H6ZM12.35 11.3H18V6.4H12.35ZM8.5 15.5Q8.925 15.5 9.213 15.212Q9.5 14.925 9.5 14.5Q9.5 14.075 9.213 13.787Q8.925 13.5 8.5 13.5Q8.075 13.5 7.788 13.787Q7.5 14.075 7.5 14.5Q7.5 14.925 7.788 15.212Q8.075 15.5 8.5 15.5ZM15.5 15.5Q15.925 15.5 16.212 15.212Q16.5 14.925 16.5 14.5Q16.5 14.075 16.212 13.787Q15.925 13.5 15.5 13.5Q15.075 13.5 14.788 13.787Q14.5 14.075 14.5 14.5Q14.5 14.925 14.788 15.212Q15.075 15.5 15.5 15.5Z"/>
    </Icon>
  );
});

IconMaterialTrainSharpW100Filled.displayName = 'AmauiIconMaterialTrainSharpW100Filled';

export default IconMaterialTrainSharpW100Filled;
