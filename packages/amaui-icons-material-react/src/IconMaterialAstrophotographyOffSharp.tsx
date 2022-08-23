import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAstrophotographyOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AstrophotographyOffSharp'
      short_name='AstrophotographyOff'

      {...props}
    >
      <path d="M19 9 17.75 6.25 15 5 17.75 3.75 19 1 20.25 3.75 23 5 20.25 6.25ZM19.775 22.6 1.4 4.225 2.8 2.8 7.45 7.45 9 4 11.5 9.5 17 12 13.55 13.55 17.75 17.75 19 15 20.25 17.75 23 19 20.25 20.25 21.175 21.2ZM9 20 6.5 14.5 1 12 4.675 10.325 10.675 16.325Z"/>
    </Icon>
  );
});

IconMaterialAstrophotographyOffSharp.displayName = 'AmauiIconMaterialAstrophotographyOffSharp';

export default IconMaterialAstrophotographyOffSharp;
