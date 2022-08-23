import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleSharpFilled'
      short_name='Style'

      {...props}
    >
      <path d="M3.975 12.85V19.8L1.275 18.7ZM8.9 22H5.975V14ZM11.225 22.6 5.375 6.55 16.725 2.4 22.575 18.45ZM10.975 10Q11.4 10 11.688 9.712Q11.975 9.425 11.975 9Q11.975 8.575 11.688 8.287Q11.4 8 10.975 8Q10.55 8 10.263 8.287Q9.975 8.575 9.975 9Q9.975 9.425 10.263 9.712Q10.55 10 10.975 10Z"/>
    </Icon>
  );
});

IconMaterialStyleSharpFilled.displayName = 'AmauiIconMaterialStyleSharpFilled';

export default IconMaterialStyleSharpFilled;
