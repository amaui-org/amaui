import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransformSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformSharp'
      short_name='Transform'

      {...props}
    >
      <path d="M16 23 12 19 13.4 17.55 15 19.15V17H9Q8.175 17 7.588 16.413Q7 15.825 7 15V9H2V7H7V4.85L5.4 6.45L4 5L8 1L12 5L10.6 6.45L9 4.85V15Q9 15 9 15Q9 15 9 15H22V17H17V19.15L18.6 17.55L20 19ZM15 13V9Q15 9 15 9Q15 9 15 9H11V7H15Q15.825 7 16.413 7.587Q17 8.175 17 9V13Z"/>
    </Icon>
  );
});

IconMaterialTransformSharp.displayName = 'AmauiIconMaterialTransformSharp';

export default IconMaterialTransformSharp;
