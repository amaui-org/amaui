import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacityRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityRoundedW100'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 19.7Q9.2 19.7 7.25 17.8Q5.3 15.9 5.3 13.1Q5.3 11.775 5.838 10.587Q6.375 9.4 7.25 8.45L11.475 4.325Q11.6 4.2 11.725 4.15Q11.85 4.1 12 4.1Q12.15 4.1 12.275 4.15Q12.4 4.2 12.525 4.325L16.75 8.45Q17.625 9.4 18.163 10.587Q18.7 11.775 18.7 13.1Q18.7 15.9 16.75 17.8Q14.8 19.7 12 19.7ZM6.075 14H17.925Q18.225 12.2 17.575 10.9Q16.925 9.6 16.25 8.95L12 4.75L7.75 8.95Q7.075 9.6 6.438 10.9Q5.8 12.2 6.075 14Z"/>
    </Icon>
  );
});

IconMaterialOpacityRoundedW100.displayName = 'AmauiIconMaterialOpacityRoundedW100';

export default IconMaterialOpacityRoundedW100;
