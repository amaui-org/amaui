import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationCityRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityRoundedW100'
      short_name='LocationCity'

      {...props}
    >
      <path d="M6.35 19.9Q6.075 19.9 5.863 19.688Q5.65 19.475 5.65 19.2V7.9Q5.65 7.625 5.863 7.412Q6.075 7.2 6.35 7.2H9.65V3.85Q9.65 3.775 9.663 3.712Q9.675 3.65 9.713 3.587Q9.75 3.525 9.788 3.462Q9.825 3.4 9.875 3.35L11.475 1.825Q11.675 1.6 12 1.6Q12.325 1.6 12.525 1.825L14.125 3.35Q14.225 3.475 14.288 3.587Q14.35 3.7 14.35 3.85V11.2H17.65Q17.925 11.2 18.138 11.412Q18.35 11.625 18.35 11.9V19.2Q18.35 19.475 18.138 19.688Q17.925 19.9 17.65 19.9ZM6.35 19.2H9.65V15.9H6.35ZM6.35 15.2H9.65V11.9H6.35ZM6.35 11.2H9.65V7.9H6.35ZM10.35 19.2H13.65V15.9H10.35ZM10.35 15.2H13.65V11.9H10.35ZM10.35 11.2H13.65V7.9H10.35ZM10.35 7.2H13.65V3.9H10.35ZM14.35 19.2H17.65V15.9H14.35ZM14.35 15.2H17.65V11.9H14.35Z"/>
    </Icon>
  );
});

IconMaterialLocationCityRoundedW100.displayName = 'AmauiIconMaterialLocationCityRoundedW100';

export default IconMaterialLocationCityRoundedW100;
