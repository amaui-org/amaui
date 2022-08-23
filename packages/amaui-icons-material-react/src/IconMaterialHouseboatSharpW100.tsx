import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseboatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatSharpW100'
      short_name='Houseboat'

      {...props}
    >
      <path d="M2.65 17.7V16.975Q3.425 16.775 3.888 16.387Q4.35 16 5.325 16Q6.525 16 7.113 16.5Q7.7 17 8.65 17Q9.675 17 10.263 16.5Q10.85 16 12 16Q13.15 16 13.738 16.5Q14.325 17 15.35 17Q16.3 17 16.888 16.5Q17.475 16 18.675 16Q19.725 16 20.113 16.363Q20.5 16.725 21.35 16.975V17.7Q20.575 17.55 20.038 17.125Q19.5 16.7 18.65 16.7Q17.65 16.7 17.075 17.2Q16.5 17.7 15.325 17.7Q14.125 17.7 13.6 17.2Q13.075 16.7 12 16.7Q10.925 16.7 10.4 17.2Q9.875 17.7 8.675 17.7Q7.5 17.7 6.925 17.2Q6.35 16.7 5.35 16.7Q4.475 16.7 3.963 17.125Q3.45 17.55 2.65 17.7ZM5.725 13.7 4.175 12.1 4.65 11.625 6.075 13H8.3V8.675L6.975 9.65L6.55 9.1L12 5.075L17.425 9.075L17 9.65L15.7 8.7V13H17.925L19.35 11.625L19.825 12.1L18.225 13.7ZM9 13H11.65V11H12.35V13H15V8.175L12 5.95L9 8.15ZM9 13H15H12H9Z"/>
    </Icon>
  );
});

IconMaterialHouseboatSharpW100.displayName = 'AmauiIconMaterialHouseboatSharpW100';

export default IconMaterialHouseboatSharpW100;
