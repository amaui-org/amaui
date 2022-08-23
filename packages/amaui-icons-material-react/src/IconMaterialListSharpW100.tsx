import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialListSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListSharpW100'
      short_name='List'

      {...props}
    >
      <path d="M7.3 8.35V7.65H20.35V8.35ZM7.3 12.35V11.65H20.35V12.35ZM7.3 16.35V15.65H20.35V16.35ZM4.2 8.55Q3.975 8.55 3.812 8.387Q3.65 8.225 3.65 8Q3.65 7.775 3.812 7.612Q3.975 7.45 4.2 7.45Q4.425 7.45 4.588 7.612Q4.75 7.775 4.75 8Q4.75 8.225 4.588 8.387Q4.425 8.55 4.2 8.55ZM4.2 12.55Q3.975 12.55 3.812 12.387Q3.65 12.225 3.65 12Q3.65 11.775 3.812 11.612Q3.975 11.45 4.2 11.45Q4.425 11.45 4.588 11.612Q4.75 11.775 4.75 12Q4.75 12.225 4.588 12.387Q4.425 12.55 4.2 12.55ZM4.2 16.55Q3.975 16.55 3.812 16.388Q3.65 16.225 3.65 16Q3.65 15.775 3.812 15.613Q3.975 15.45 4.2 15.45Q4.425 15.45 4.588 15.613Q4.75 15.775 4.75 16Q4.75 16.225 4.588 16.388Q4.425 16.55 4.2 16.55Z"/>
    </Icon>
  );
});

IconMaterialListSharpW100.displayName = 'AmauiIconMaterialListSharpW100';

export default IconMaterialListSharpW100;
