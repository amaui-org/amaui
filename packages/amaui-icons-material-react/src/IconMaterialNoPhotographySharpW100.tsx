import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographySharpW100'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M21.3 22.3 18.7 19.7H3.3V6.3H5.3L2.25 3.25L2.75 2.75L21.8 21.8ZM4 19H18L14.475 15.475Q14 15.95 13.363 16.225Q12.725 16.5 12 16.5Q10.525 16.5 9.512 15.488Q8.5 14.475 8.5 13Q8.5 12.275 8.775 11.637Q9.05 11 9.525 10.525L6 7H4ZM20.7 17.9 20 17.2V7H9.8L8.375 5.575L9.55 4.3H14.45L16.3 6.3H20.7ZM15.475 12.675 12.325 9.525Q12.325 9.525 12.325 9.525Q12.325 9.525 12.325 9.525Q13.6 9.65 14.475 10.525Q15.35 11.4 15.475 12.675Q15.475 12.675 15.475 12.675Q15.475 12.675 15.475 12.675ZM12 13ZM14.425 11.625Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographySharpW100.displayName = 'AmauiIconMaterialNoPhotographySharpW100';

export default IconMaterialNoPhotographySharpW100;
