import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographySharpFilled'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM22 19.125 16.475 13.6Q16.5 13.45 16.5 13.3Q16.5 13.15 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q11.85 8.5 11.713 8.512Q11.575 8.525 11.425 8.55L7.5 4.625L9 3H15L16.85 5H22ZM12 17.5Q12.575 17.5 13.125 17.375Q13.675 17.25 14.15 16.975L8.025 10.85Q7.75 11.325 7.625 11.875Q7.5 12.425 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographySharpFilled.displayName = 'AmauiIconMaterialNoPhotographySharpFilled';

export default IconMaterialNoPhotographySharpFilled;
