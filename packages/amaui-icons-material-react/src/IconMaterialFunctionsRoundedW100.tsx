import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFunctionsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsRoundedW100'
      short_name='Functions'

      {...props}
    >
      <path d="M7.85 18.85Q7.6 18.85 7.425 18.675Q7.25 18.5 7.25 18.25Q7.25 18.125 7.312 17.95Q7.375 17.775 7.475 17.675L13.15 12L7.475 6.325Q7.375 6.225 7.312 6.062Q7.25 5.9 7.25 5.75Q7.25 5.5 7.425 5.325Q7.6 5.15 7.85 5.15H16.4Q16.55 5.15 16.65 5.25Q16.75 5.35 16.75 5.5Q16.75 5.65 16.65 5.75Q16.55 5.85 16.4 5.85H8L13.65 11.5Q13.75 11.6 13.8 11.738Q13.85 11.875 13.85 12Q13.85 12.125 13.8 12.262Q13.75 12.4 13.65 12.5L8 18.15H16.4Q16.55 18.15 16.65 18.25Q16.75 18.35 16.75 18.5Q16.75 18.65 16.65 18.75Q16.55 18.85 16.4 18.85Z"/>
    </Icon>
  );
});

IconMaterialFunctionsRoundedW100.displayName = 'AmauiIconMaterialFunctionsRoundedW100';

export default IconMaterialFunctionsRoundedW100;
