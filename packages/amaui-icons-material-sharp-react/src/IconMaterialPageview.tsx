import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageview = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pageview'

      short_name='Pageview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.325 17.725 1.4-1.4L15.3 13.9q.35-.525.525-1.125.175-.6.175-1.275 0-1.875-1.312-3.188Q13.375 7 11.5 7 9.625 7 8.312 8.312 7 9.625 7 11.5q0 1.875 1.312 3.188Q9.625 16 11.5 16q.65 0 1.262-.175.613-.175 1.138-.525ZM11.5 14q-1.05 0-1.775-.725Q9 12.55 9 11.5q0-1.05.725-1.775Q10.45 9 11.5 9q1.05 0 1.775.725Q14 10.45 14 11.5q0 1.05-.725 1.775Q12.55 14 11.5 14ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialPageview.displayName = 'AmauiIconMaterialPageview';

export default IconMaterialPageview;
