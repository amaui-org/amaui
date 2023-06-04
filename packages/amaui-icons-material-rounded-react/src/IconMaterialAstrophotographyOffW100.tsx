import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAstrophotographyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AstrophotographyOffW100'

      short_name='AstrophotographyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.7 7.95-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Zm3.6 13.75L2.2 2.6l.5-.5 5.7 5.7.3-.65.775 1.725 2.35 2.35L13.55 12l-.65.3 4.475 4.475.325-.725.75 1.7 1.7.75-.725.325L21.8 21.2ZM8.7 16.85 7.2 13.5 3.85 12l3.4-1.525 2.975 2.975Z"/>
    </Icon>
  );
});

IconMaterialAstrophotographyOffW100.displayName = 'AmauiIconMaterialAstrophotographyOffW100';

export default IconMaterialAstrophotographyOffW100;
