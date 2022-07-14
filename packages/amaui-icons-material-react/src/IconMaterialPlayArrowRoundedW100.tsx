import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowRoundedW100'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M10.45 15.925Q10.075 16.175 9.688 15.95Q9.3 15.725 9.3 15.275V8.725Q9.3 8.275 9.688 8.05Q10.075 7.825 10.45 8.075L15.6 11.375Q15.95 11.6 15.95 12Q15.95 12.4 15.6 12.625ZM10 12ZM10 15.35 15.3 12 10 8.65Z"/>
    </Icon>
  );
});

export default IconMaterialPlayArrowRoundedW100;
