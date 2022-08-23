import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreHorizRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizRoundedW100Filled'
      short_name='MoreHoriz'

      {...props}
    >
      <path d="M6.6 12.7Q6.3 12.7 6.1 12.5Q5.9 12.3 5.9 12Q5.9 11.7 6.1 11.5Q6.3 11.3 6.6 11.3Q6.9 11.3 7.1 11.5Q7.3 11.7 7.3 12Q7.3 12.3 7.1 12.5Q6.9 12.7 6.6 12.7ZM12 12.7Q11.7 12.7 11.5 12.5Q11.3 12.3 11.3 12Q11.3 11.7 11.5 11.5Q11.7 11.3 12 11.3Q12.3 11.3 12.5 11.5Q12.7 11.7 12.7 12Q12.7 12.3 12.5 12.5Q12.3 12.7 12 12.7ZM17.4 12.7Q17.1 12.7 16.9 12.5Q16.7 12.3 16.7 12Q16.7 11.7 16.9 11.5Q17.1 11.3 17.4 11.3Q17.7 11.3 17.9 11.5Q18.1 11.7 18.1 12Q18.1 12.3 17.9 12.5Q17.7 12.7 17.4 12.7Z"/>
    </Icon>
  );
});

IconMaterialMoreHorizRoundedW100Filled.displayName = 'AmauiIconMaterialMoreHorizRoundedW100Filled';

export default IconMaterialMoreHorizRoundedW100Filled;
