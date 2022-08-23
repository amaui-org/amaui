import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBubbleChartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleChartRoundedW100Filled'
      short_name='BubbleChart'

      {...props}
    >
      <path d="M7.5 17Q6.275 17 5.388 16.113Q4.5 15.225 4.5 14Q4.5 12.75 5.388 11.875Q6.275 11 7.5 11Q8.75 11 9.625 11.875Q10.5 12.75 10.5 14Q10.5 15.225 9.625 16.113Q8.75 17 7.5 17ZM16 13.2Q14.225 13.2 13.013 11.987Q11.8 10.775 11.8 9Q11.8 7.225 13.013 6.012Q14.225 4.8 16 4.8Q17.775 4.8 18.988 6.012Q20.2 7.225 20.2 9Q20.2 10.775 18.988 11.987Q17.775 13.2 16 13.2ZM14.25 19.25Q13.425 19.25 12.838 18.663Q12.25 18.075 12.25 17.25Q12.25 16.425 12.838 15.838Q13.425 15.25 14.25 15.25Q15.075 15.25 15.663 15.838Q16.25 16.425 16.25 17.25Q16.25 18.075 15.663 18.663Q15.075 19.25 14.25 19.25Z"/>
    </Icon>
  );
});

IconMaterialBubbleChartRoundedW100Filled.displayName = 'AmauiIconMaterialBubbleChartRoundedW100Filled';

export default IconMaterialBubbleChartRoundedW100Filled;
