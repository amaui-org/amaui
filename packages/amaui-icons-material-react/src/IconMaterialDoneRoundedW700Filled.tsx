import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneRoundedW700Filled'
      short_name='Done'

      {...props}
    >
      <path d="M9.55 18.15Q9.25 18.15 8.963 18.038Q8.675 17.925 8.45 17.7L4.15 13.4Q3.7 12.95 3.713 12.287Q3.725 11.625 4.175 11.175Q4.625 10.725 5.3 10.725Q5.975 10.725 6.425 11.175L9.55 14.3L17.575 6.275Q18.025 5.825 18.688 5.812Q19.35 5.8 19.825 6.275Q20.275 6.725 20.275 7.4Q20.275 8.075 19.825 8.525L10.65 17.7Q10.425 17.925 10.138 18.038Q9.85 18.15 9.55 18.15Z"/>
    </Icon>
  )
});

export default IconMaterialDoneRoundedW700Filled;
