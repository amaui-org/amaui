import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurMediumSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumSharpW100'
      short_name='BlurMedium'

      {...props}
    >
      <path d="M8 16.35Q7.85 16.35 7.75 16.25Q7.65 16.15 7.65 16Q7.65 15.85 7.75 15.75Q7.85 15.65 8 15.65H12.875Q11.875 14.975 11.413 14.1Q10.95 13.225 10.9 12.35H5.45Q5.3 12.35 5.2 12.25Q5.1 12.15 5.1 12Q5.1 11.85 5.2 11.75Q5.3 11.65 5.45 11.65H10.9Q11 10.725 11.463 9.85Q11.925 8.975 12.875 8.35H5Q4.85 8.35 4.75 8.25Q4.65 8.15 4.65 8Q4.65 7.85 4.75 7.75Q4.85 7.65 5 7.65H15.25Q17.05 7.65 18.325 8.925Q19.6 10.2 19.6 12Q19.6 13.8 18.325 15.075Q17.05 16.35 15.25 16.35ZM15.25 15.65Q16.75 15.65 17.825 14.575Q18.9 13.5 18.9 12Q18.9 10.5 17.825 9.425Q16.75 8.35 15.25 8.35Q13.75 8.35 12.675 9.425Q11.6 10.5 11.6 12Q11.6 13.5 12.675 14.575Q13.75 15.65 15.25 15.65ZM4.75 16.35Q4.6 16.35 4.5 16.25Q4.4 16.15 4.4 16Q4.4 15.85 4.5 15.75Q4.6 15.65 4.75 15.65H5.3Q5.45 15.65 5.55 15.75Q5.65 15.85 5.65 16Q5.65 16.15 5.55 16.25Q5.45 16.35 5.3 16.35Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumSharpW100.displayName = 'AmauiIconMaterialBlurMediumSharpW100';

export default IconMaterialBlurMediumSharpW100;
