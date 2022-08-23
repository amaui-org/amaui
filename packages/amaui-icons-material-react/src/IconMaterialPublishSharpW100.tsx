import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishSharpW100'
      short_name='Publish'

      {...props}
    >
      <path d="M11.65 18.7V9.9L9.4 12.15L8.9 11.65L12 8.55L15.1 11.65L14.6 12.15L12.35 9.9V18.7ZM5.3 8.55V4.85H18.7V8.55H18V5.55H6V8.55Z"/>
    </Icon>
  );
});

IconMaterialPublishSharpW100.displayName = 'AmauiIconMaterialPublishSharpW100';

export default IconMaterialPublishSharpW100;
