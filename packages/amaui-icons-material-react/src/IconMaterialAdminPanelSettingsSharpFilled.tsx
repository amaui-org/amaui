import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdminPanelSettingsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminPanelSettingsSharpFilled'
      short_name='AdminPanelSettings'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V10.675Q19.35 10.35 18.538 10.175Q17.725 10 17 10Q14.1 10 12.05 12.05Q10 14.1 10 17Q10 18.55 10.588 19.8Q11.175 21.05 12.075 21.975Q12.05 21.975 12.038 21.988Q12.025 22 12 22ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM17 20Q17.775 20 18.425 19.637Q19.075 19.275 19.475 18.675Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.525 18.675Q14.925 19.275 15.575 19.637Q16.225 20 17 20ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialAdminPanelSettingsSharpFilled.displayName = 'AmauiIconMaterialAdminPanelSettingsSharpFilled';

export default IconMaterialAdminPanelSettingsSharpFilled;
