import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesRoundedW100Filled'
      short_name='Headphones'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V12Q4.3 10.4 4.9 9Q5.5 7.6 6.55 6.55Q7.6 5.5 9 4.9Q10.4 4.3 12 4.3Q13.6 4.3 15 4.9Q16.4 5.5 17.45 6.55Q18.5 7.6 19.1 9Q19.7 10.4 19.7 12V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7H17.7Q17.075 19.7 16.637 19.262Q16.2 18.825 16.2 18.2V15.6Q16.2 14.975 16.637 14.537Q17.075 14.1 17.7 14.1H19V12Q19 9.075 16.962 7.037Q14.925 5 12 5Q9.075 5 7.038 7.037Q5 9.075 5 12V14.1H6.3Q6.925 14.1 7.363 14.537Q7.8 14.975 7.8 15.6V18.2Q7.8 18.825 7.363 19.262Q6.925 19.7 6.3 19.7Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesRoundedW100Filled.displayName = 'AmauiIconMaterialHeadphonesRoundedW100Filled';

export default IconMaterialHeadphonesRoundedW100Filled;
