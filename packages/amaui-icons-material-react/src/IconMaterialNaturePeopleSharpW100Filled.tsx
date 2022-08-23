import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNaturePeopleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleSharpW100Filled'
      short_name='NaturePeople'

      {...props}
    >
      <path d="M4.6 12.8Q4.175 12.8 3.888 12.512Q3.6 12.225 3.6 11.8Q3.6 11.375 3.888 11.087Q4.175 10.8 4.6 10.8Q5.025 10.8 5.312 11.087Q5.6 11.375 5.6 11.8Q5.6 12.225 5.312 12.512Q5.025 12.8 4.6 12.8ZM3.9 21.35V17.65H3.2V13.8H6V17.65H5.3V20.65H14.75V14.2H12.35Q11.1 14.2 10.25 13.362Q9.4 12.525 9.4 11.4Q9.4 10.375 10.075 9.537Q10.75 8.7 11.8 8.25Q11.8 6.675 12.85 5.737Q13.9 4.8 15.1 4.8Q16.3 4.8 17.35 5.737Q18.4 6.675 18.4 8.25Q19.45 8.7 20.125 9.537Q20.8 10.375 20.8 11.4Q20.8 12.525 19.95 13.362Q19.1 14.2 17.85 14.2H15.45V20.65H20.45V21.35Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleSharpW100Filled.displayName = 'AmauiIconMaterialNaturePeopleSharpW100Filled';

export default IconMaterialNaturePeopleSharpW100Filled;
