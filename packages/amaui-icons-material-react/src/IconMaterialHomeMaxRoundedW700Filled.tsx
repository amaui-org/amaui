import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxRoundedW700Filled'
      short_name='HomeMax'

      {...props}
    >
      <path d="M7.8 20.525Q7.15 20.525 6.688 20.062Q6.225 19.6 6.225 18.95V18.775H5Q3.025 18.775 1.625 17.375Q0.225 15.975 0.225 14V9Q0.225 7.025 1.625 5.625Q3.025 4.225 5 4.225H19Q20.975 4.225 22.375 5.625Q23.775 7.025 23.775 9V14Q23.775 15.975 22.375 17.375Q20.975 18.775 19 18.775H17.775V18.95Q17.775 19.6 17.312 20.062Q16.85 20.525 16.2 20.525Z"/>
    </Icon>
  )
});

export default IconMaterialHomeMaxRoundedW700Filled;
