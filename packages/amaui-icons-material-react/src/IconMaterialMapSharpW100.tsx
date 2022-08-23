import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMapSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapSharpW100'
      short_name='Map'

      {...props}
    >
      <path d="M15 19.6 9 17.5 4.3 19.325V6L9 4.4L15 6.5L19.7 4.675V18.075ZM14.65 18.75V7.05L9.35 5.2V16.9ZM15.35 18.75 19 17.55V5.7L15.35 7.05ZM5 18.3 8.65 16.9V5.2L5 6.45ZM15.35 7.05V18.75ZM8.65 5.2V16.9Z"/>
    </Icon>
  );
});

IconMaterialMapSharpW100.displayName = 'AmauiIconMaterialMapSharpW100';

export default IconMaterialMapSharpW100;
