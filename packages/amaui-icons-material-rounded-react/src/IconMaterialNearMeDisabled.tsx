import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.05 13.95-6.475-2.625q-.325-.125-.475-.387-.15-.263-.15-.538t.163-.537q.162-.263.487-.388l4.275-1.6L3.5 3.5q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3l-4.375-4.35-1.6 4.275q-.125.325-.388.488-.262.162-.537.162t-.538-.15q-.262-.15-.387-.475Zm7.625-1.975L16.1 10.4l1.5-4-4 1.5-1.575-1.575L18.95 3.75q.3-.125.575-.038Q19.8 3.8 20 4q.2.2.288.475.087.275-.038.575ZM13.55 17.3l1.025-2.725-5.15-5.15L6.7 10.45l4.9 1.95Zm1.3-8.15ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabled.displayName = 'AmauiIconMaterialNearMeDisabled';

export default IconMaterialNearMeDisabled;
