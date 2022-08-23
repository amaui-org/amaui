import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoPhotographySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoPhotographySharp'
      short_name='NoPhotography'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H2V4.825L0.675 3.5L2.1 2.075L21.9 21.875ZM4 19H16.175L14.15 16.975Q13.675 17.25 13.125 17.375Q12.575 17.5 12 17.5Q10.125 17.5 8.812 16.188Q7.5 14.875 7.5 13Q7.5 12.425 7.625 11.875Q7.75 11.325 8.025 10.85L4.175 7H4ZM22 19.125 20 17.125V7H9.875L7.5 4.625L9 3H15L16.85 5H22ZM16.475 13.6 11.4 8.525Q11.55 8.5 11.7 8.5Q11.85 8.5 12 8.5Q13.875 8.5 15.188 9.812Q16.5 11.125 16.5 13Q16.5 13.15 16.5 13.3Q16.5 13.45 16.475 13.6ZM11.1 13.9ZM14.45 11.575Z"/>
    </Icon>
  );
});

IconMaterialNoPhotographySharp.displayName = 'AmauiIconMaterialNoPhotographySharp';

export default IconMaterialNoPhotographySharp;
