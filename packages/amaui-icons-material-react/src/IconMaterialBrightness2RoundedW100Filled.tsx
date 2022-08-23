import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness2RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2RoundedW100Filled'
      short_name='Brightness2'

      {...props}
    >
      <path d="M17.475 12Q17.475 13.8 16.788 15.387Q16.1 16.975 14.925 18.15Q13.75 19.325 12.163 20.012Q10.575 20.7 8.775 20.7Q8.525 20.7 8.3 20.688Q8.075 20.675 7.85 20.65Q7.55 20.625 7.338 20.425Q7.125 20.225 7.125 19.925Q7.125 19.8 7.162 19.663Q7.2 19.525 7.3 19.425Q8.625 17.925 9.35 15.975Q10.075 14.025 10.075 12Q10.125 9.975 9.413 8.025Q8.7 6.075 7.375 4.575Q7.275 4.475 7.238 4.337Q7.2 4.2 7.2 4.075Q7.2 3.775 7.412 3.575Q7.625 3.375 7.925 3.35Q8.15 3.325 8.375 3.312Q8.6 3.3 8.85 3.3Q10.65 3.3 12.238 3.987Q13.825 4.675 15 5.85Q16.175 7.025 16.837 8.612Q17.5 10.2 17.475 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness2RoundedW100Filled.displayName = 'AmauiIconMaterialBrightness2RoundedW100Filled';

export default IconMaterialBrightness2RoundedW100Filled;
