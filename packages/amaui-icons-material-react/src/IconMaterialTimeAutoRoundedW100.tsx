import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimeAutoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimeAutoRoundedW100'
      short_name='TimeAuto'

      {...props}
    >
      <path d="M8.775 16.6H9.525L10.3 14.35H13.625L14.4 16.6H15.15L12.45 8.8H11.475ZM10.55 13.65 11.975 9.55 13.375 13.65ZM9.5 2.35V1.65H14.5V2.35ZM12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.425 5.3 14.763 5.825Q16.1 6.35 17.2 7.3L18.2 6.3L18.7 6.8L17.7 7.8Q18.65 8.9 19.175 10.237Q19.7 11.575 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7ZM12 20Q14.9 20 16.95 17.95Q19 15.9 19 13Q19 10.1 16.95 8.05Q14.9 6 12 6Q9.1 6 7.05 8.05Q5 10.1 5 13Q5 15.9 7.05 17.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTimeAutoRoundedW100.displayName = 'AmauiIconMaterialTimeAutoRoundedW100';

export default IconMaterialTimeAutoRoundedW100;
