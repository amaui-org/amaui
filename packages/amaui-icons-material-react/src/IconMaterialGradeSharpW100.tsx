import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeSharpW100'
      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM8.25 18.55 9.65 13.9 6.075 11.3H10.55L12 6.5L13.45 11.3H17.925L14.35 13.9L15.75 18.55L12 15.7ZM9.6 16.65 12 14.825 14.4 16.65 13.525 13.625 15.75 12H12.95L12 8.9L11.05 12H8.25L10.475 13.625Z"/>
    </Icon>
  );
});

IconMaterialGradeSharpW100.displayName = 'AmauiIconMaterialGradeSharpW100';

export default IconMaterialGradeSharpW100;
