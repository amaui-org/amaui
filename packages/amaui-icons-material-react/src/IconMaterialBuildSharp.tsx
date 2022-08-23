import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildSharp'
      short_name='Build'

      {...props}
    >
      <path d="M17.875 21.425 11.1 14.6Q10.6 14.8 10.088 14.9Q9.575 15 9 15Q6.5 15 4.75 13.25Q3 11.5 3 9Q3 8.1 3.25 7.287Q3.5 6.475 3.95 5.75L7.6 9.4L9.4 7.6L5.75 3.95Q6.475 3.5 7.287 3.25Q8.1 3 9 3Q11.5 3 13.25 4.75Q15 6.5 15 9Q15 9.575 14.9 10.087Q14.8 10.6 14.6 11.1L21.425 17.875ZM17.875 18.575 18.55 17.9 12.15 11.5Q12.6 11 12.8 10.337Q13 9.675 13 9Q13 7.5 12.038 6.387Q11.075 5.275 9.65 5.05L11.5 6.9Q11.8 7.2 11.8 7.6Q11.8 8 11.5 8.3L8.3 11.5Q8 11.8 7.6 11.8Q7.2 11.8 6.9 11.5L5.05 9.65Q5.275 11.075 6.388 12.037Q7.5 13 9 13Q9.65 13 10.3 12.8Q10.95 12.6 11.475 12.175ZM11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Q11.8 11.8 11.8 11.8Z"/>
    </Icon>
  );
});

IconMaterialBuildSharp.displayName = 'AmauiIconMaterialBuildSharp';

export default IconMaterialBuildSharp;
