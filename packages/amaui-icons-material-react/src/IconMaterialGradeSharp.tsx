import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeSharp'
      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM5.825 22 8.15 14.4 2 10H9.6L12 2L14.4 10H22L15.85 14.4L18.175 22L12 17.3ZM9.6 16.65 12 14.8 14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9L11.05 12H8.25L10.5 13.6Z"/>
    </Icon>
  );
});

IconMaterialGradeSharp.displayName = 'AmauiIconMaterialGradeSharp';

export default IconMaterialGradeSharp;
