import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocsAddOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAddOnTwoTone'
      short_name='DocsAddOn'

      {...props}
    >
      <path d="M19 6H4V4H19ZM4 10V8H19V10ZM4 14V12H13.65Q13.075 12.4 12.613 12.9Q12.15 13.4 11.8 14ZM4 16H11.075Q11.025 16.25 11.012 16.488Q11 16.725 11 16.975Q11 17.25 11.025 17.5Q11.05 17.75 11.1 18H4ZM16 20.975V17.975H13V15.975H16V12.975H18V15.975H21V17.975H18V20.975Z"/>
    </Icon>
  );
});

IconMaterialDocsAddOnTwoTone.displayName = 'AmauiIconMaterialDocsAddOnTwoTone';

export default IconMaterialDocsAddOnTwoTone;
