import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotorcycleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotorcycleSharp'
      short_name='Motorcycle'

      {...props}
    >
      <path d="M10.7 11H9.95Q9.825 11 9.575 11Q9.325 11 8.95 11H12.7ZM5 19Q2.925 19 1.463 17.538Q0 16.075 0 14Q0 11.925 1.463 10.462Q2.925 9 5 9H16.6L14.6 7H11V5H15.4L19.45 9.05Q21.4 9.2 22.7 10.625Q24 12.05 24 14Q24 16.075 22.538 17.538Q21.075 19 19 19Q16.925 19 15.463 17.538Q14 16.075 14 14Q14 13.55 14.062 13.112Q14.125 12.675 14.3 12.25L11.55 15H9.9Q9.55 16.75 8.175 17.875Q6.8 19 5 19ZM19 17Q20.25 17 21.125 16.125Q22 15.25 22 14Q22 12.75 21.125 11.875Q20.25 11 19 11Q17.75 11 16.875 11.875Q16 12.75 16 14Q16 15.25 16.875 16.125Q17.75 17 19 17ZM5 17Q5.95 17 6.713 16.45Q7.475 15.9 7.8 15H5V13H7.8Q7.475 12.1 6.713 11.55Q5.95 11 5 11Q3.75 11 2.875 11.875Q2 12.75 2 14Q2 15.25 2.875 16.125Q3.75 17 5 17ZM9.95 13H10.7L12.7 11H8.95Q9.325 11.425 9.575 11.925Q9.825 12.425 9.95 13Z"/>
    </Icon>
  );
});

IconMaterialMotorcycleSharp.displayName = 'AmauiIconMaterialMotorcycleSharp';

export default IconMaterialMotorcycleSharp;
