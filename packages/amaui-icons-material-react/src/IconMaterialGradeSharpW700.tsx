import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeSharpW700'
      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM4.975 23.275 7.625 14.625 0.55 9.575H9.225L12 0.475L14.775 9.575H23.45L16.375 14.625L19.05 23.275L12.025 17.925ZM9.6 16.65 12 14.8 14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9L11.05 12H8.25L10.5 13.6Z"/>
    </Icon>
  )
});

export default IconMaterialGradeSharpW700;
