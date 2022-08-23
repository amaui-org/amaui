import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurShortSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortSharpW100'
      short_name='BlurShort'

      {...props}
    >
      <path d="M15.25 15.65Q16.75 15.65 17.825 14.575Q18.9 13.5 18.9 12Q18.9 10.5 17.825 9.425Q16.75 8.35 15.25 8.35Q13.75 8.35 12.675 9.425Q11.6 10.5 11.6 12Q11.6 13.5 12.675 14.575Q13.75 15.65 15.25 15.65ZM15.25 16.35Q13.675 16.35 12.35 15.262Q11.025 14.175 10.9 12.35H6.95Q6.8 12.35 6.7 12.25Q6.6 12.15 6.6 12Q6.6 11.85 6.7 11.75Q6.8 11.65 6.95 11.65H10.9Q10.975 10.725 11.463 9.837Q11.95 8.95 12.875 8.35H5Q4.85 8.35 4.75 8.25Q4.65 8.15 4.65 8Q4.65 7.85 4.75 7.75Q4.85 7.65 5 7.65H15.25Q17.05 7.65 18.325 8.925Q19.6 10.2 19.6 12Q19.6 13.8 18.325 15.075Q17.05 16.35 15.25 16.35Z"/>
    </Icon>
  );
});

IconMaterialBlurShortSharpW100.displayName = 'AmauiIconMaterialBlurShortSharpW100';

export default IconMaterialBlurShortSharpW100;
