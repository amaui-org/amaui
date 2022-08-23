import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowLeftRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftRoundedFilled'
      short_name='ArrowLeft'

      {...props}
    >
      <path d="M12.3 15.3 9.7 12.7Q9.55 12.55 9.475 12.375Q9.4 12.2 9.4 12Q9.4 11.8 9.475 11.625Q9.55 11.45 9.7 11.3L12.3 8.7Q12.775 8.225 13.387 8.488Q14 8.75 14 9.425V14.575Q14 15.25 13.387 15.512Q12.775 15.775 12.3 15.3Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftRoundedFilled.displayName = 'AmauiIconMaterialArrowLeftRoundedFilled';

export default IconMaterialArrowLeftRoundedFilled;
