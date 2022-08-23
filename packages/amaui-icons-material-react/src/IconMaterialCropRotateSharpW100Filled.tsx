import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropRotateSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateSharpW100Filled'
      short_name='CropRotate'

      {...props}
    >
      <path d="M15 14.3V9H9.7V8.3H15.7V14.3ZM15 17.7V15.7H8.3V9H6.3V8.3H8.3V6.3H9V15H19V15.7H15.7V17.7ZM10.35 1.4Q10.75 1.325 11.15 1.312Q11.55 1.3 11.95 1.3Q14.025 1.3 15.887 2.037Q17.75 2.775 19.2 4.075Q20.65 5.375 21.575 7.15Q22.5 8.925 22.7 11H22Q21.8 9.075 20.938 7.425Q20.075 5.775 18.725 4.575Q17.375 3.375 15.637 2.688Q13.9 2 11.95 2L14 4.05L13.5 4.55ZM13.65 22.6Q13.25 22.675 12.85 22.688Q12.45 22.7 12.05 22.7Q9.975 22.7 8.113 21.962Q6.25 21.225 4.8 19.925Q3.35 18.625 2.425 16.85Q1.5 15.075 1.3 13H2Q2.2 14.925 3.062 16.575Q3.925 18.225 5.275 19.425Q6.625 20.625 8.363 21.312Q10.1 22 12.05 22L10 19.95L10.5 19.45Z"/>
    </Icon>
  );
});

IconMaterialCropRotateSharpW100Filled.displayName = 'AmauiIconMaterialCropRotateSharpW100Filled';

export default IconMaterialCropRotateSharpW100Filled;
